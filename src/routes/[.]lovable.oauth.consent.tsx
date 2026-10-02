import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

type Details = { authorization_id: string; client: { name: string }; redirect_uri: string; user: { email: string }; scope: string };

export const Route = createFileRoute("/.lovable/oauth/consent")({
  head: () => ({ meta: [
    { title: "Approve catalogue connection | Decorza Events" },
    { name: "description", content: "Review and approve access to Decorza Events catalogue tools." },
    { property: "og:title", content: "Approve catalogue connection | Decorza Events" },
    { property: "og:description", content: "Review and approve access to Decorza Events catalogue tools." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "robots", content: "noindex, nofollow" },
  ] }),
  errorComponent: () => <p className="mx-auto max-w-lg p-8">This connection could not be loaded. Please start again from your connecting app.</p>,
  component: ConsentPage,
});

function ConsentPage() {
  const [details, setDetails] = useState<Details | null>(null);
  const [message, setMessage] = useState("Loading connection…");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    async function load() {
      const id = new URLSearchParams(window.location.search).get("authorization_id");
      if (!id) { setMessage("This connection link is invalid. Please start again."); return; }
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (!active) return;
      if (userError || !userData.user) {
        const next = window.location.pathname + window.location.search;
        window.location.replace(`/auth?next=${encodeURIComponent(next)}`);
        return;
      }
      const { data, error } = await supabase.auth.oauth.getAuthorizationDetails(id);
      if (!active) return;
      if (error || !data) { setMessage("This connection has expired or could not be loaded. Please start again."); return; }
      if ("redirect_url" in data) { window.location.assign(data.redirect_url); return; }
      setDetails(data);
      setMessage("");
    }
    void load().catch(() => { if (active) setMessage("This connection could not be loaded. Please try again."); });
    return () => { active = false; };
  }, []);

  async function decide(approve: boolean) {
    if (!details) return;
    setBusy(true);
    setMessage("");
    try {
      const { data, error } = approve
        ? await supabase.auth.oauth.approveAuthorization(details.authorization_id, { skipBrowserRedirect: true })
        : await supabase.auth.oauth.denyAuthorization(details.authorization_id, { skipBrowserRedirect: true });
      if (error || !data?.redirect_url) throw error ?? new Error("Connection failed");
      window.location.assign(data.redirect_url);
    } catch {
      setMessage(`Could not ${approve ? "approve" : "cancel"} the connection. Please try again.`);
      setBusy(false);
    }
  }

  return <div className="mx-auto max-w-lg px-5 py-16">
    <h1 className="font-display text-3xl">{details ? `Connect ${details.client.name} to Decorza Events` : "Connect to Decorza Events"}</h1>
    {details && <div className="mt-6 space-y-3 text-sm text-muted-foreground">
      <p>Signed in as {details.user.email}</p>
      <p>{details.client.name} will be able to use Decorza Events catalogue tools as you.</p>
      <p>Return address: {details.redirect_uri}</p>
      <p>Requested identity information: {details.scope.split(" ").filter(Boolean).map(s => s === "email" ? "email address" : s === "profile" ? "basic profile" : s === "openid" ? "account identity" : s).join(", ") || "none"}.</p>
      <p>This does not bypass this app’s permissions or access rules.</p>
      <div className="flex gap-3 pt-4"><Button disabled={busy} onClick={() => void decide(true)}>Approve connection</Button><Button variant="outline" disabled={busy} onClick={() => void decide(false)}>Cancel connection</Button></div>
    </div>}
    {message && <p role="status" className="mt-5 text-sm text-muted-foreground">{message}</p>}
  </div>;
}