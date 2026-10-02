import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [
    { title: "Sign in to connect | Decorza Events" },
    { name: "description", content: "Sign in to Decorza Events to approve a secure catalogue connection." },
    { property: "og:title", content: "Sign in to connect | Decorza Events" },
    { property: "og:description", content: "Sign in to Decorza Events to approve a secure catalogue connection." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "robots", content: "noindex, nofollow" },
  ] }),
  component: AuthPage,
});

const returnKey = "decorza-oauth-return";

function safeNext(value: string | null) {
  return value?.startsWith("/") && !value.startsWith("//") && !value.includes("\\")
    ? value : "/";
}

function AuthPage() {
  const [next, setNext] = useState("/");
  const [mode, setMode] = useState<"signIn" | "signUp">("signIn");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const target = safeNext(new URLSearchParams(window.location.search).get("next") ?? sessionStorage.getItem(returnKey));
    setNext(target);
    if (target !== "/") sessionStorage.setItem(returnKey, target);
    void supabase.auth.getUser().then(({ data }) => {
      if (data.user && target !== "/") {
        sessionStorage.removeItem(returnKey);
        window.location.assign(target);
      }
    });
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      if (mode === "signUp") {
        const callback = new URL("/auth", window.location.origin);
        callback.searchParams.set("next", next);
        const { data, error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: callback.href } });
        if (error) throw error;
        if (data.session) window.location.assign(next);
        else setMessage("Check your email to confirm your account, then return to this connection.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        sessionStorage.removeItem(returnKey);
        window.location.assign(next);
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Please try again.");
    } finally { setBusy(false); }
  }

  async function googleSignIn() {
    setBusy(true);
    setMessage("");
    try {
      sessionStorage.setItem(returnKey, next);
      const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: `${window.location.origin}/auth` });
      if (result.error) throw result.error;
      if (!result.redirected) window.location.assign(next);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Google sign-in failed.");
      setBusy(false);
    }
  }

  return <div className="mx-auto max-w-md px-5 py-16">
    <h1 className="font-display text-3xl">{mode === "signIn" ? "Sign in" : "Create an account"}</h1>
    <p className="mt-2 text-muted-foreground">Sign in to connect your Decorza Events catalogue securely.</p>
    <form className="mt-8 space-y-4" onSubmit={submit}>
      <label className="block text-sm">Email<Input type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} /></label>
      <label className="block text-sm">Password<Input type="password" autoComplete={mode === "signIn" ? "current-password" : "new-password"} minLength={6} required value={password} onChange={e => setPassword(e.target.value)} /></label>
      <Button className="w-full" disabled={busy} type="submit">{mode === "signIn" ? "Sign in" : "Create account"}</Button>
    </form>
    <Button className="mt-3 w-full" variant="outline" disabled={busy} onClick={googleSignIn}>Continue with Google</Button>
    <button className="mt-5 text-sm text-primary underline" type="button" onClick={() => { setMode(mode === "signIn" ? "signUp" : "signIn"); setMessage(""); }}>
      {mode === "signIn" ? "Need an account? Sign up" : "Already have an account? Sign in"}
    </button>
    {message && <p role="status" className="mt-4 text-sm text-muted-foreground">{message}</p>}
  </div>;
}