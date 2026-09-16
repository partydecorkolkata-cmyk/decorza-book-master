import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CATEGORY_PACKAGES } from "@/lib/category-packages";

export function PackageSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  const results = useMemo(() => {
    const search = query.trim().toLowerCase();
    const packages = search
      ? CATEGORY_PACKAGES.filter((pkg) =>
          [pkg.name, pkg.description, pkg.categorySlug, ...pkg.includes]
            .join(" ")
            .toLowerCase()
            .includes(search),
        )
      : CATEGORY_PACKAGES.filter((pkg) => pkg.bestSeller);
    return packages.slice(0, 12);
  }, [query]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Search decoration packages" title="Search packages">
          <Search className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="top-[12%] max-h-[76vh] w-[calc(100%-2rem)] translate-y-0 gap-0 overflow-hidden p-0 sm:max-w-2xl">
        <DialogTitle className="sr-only">Search decoration packages</DialogTitle>
        <DialogDescription className="sr-only">
          Search existing decoration packages and open their full details.
        </DialogDescription>
        <div className="flex items-center gap-3 border-b px-4">
          <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search birthday, anniversary, proposal…"
            className="h-14 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="max-h-[calc(76vh-3.5rem)] overflow-y-auto p-2">
          {results.length > 0 ? (
            <div className="space-y-1">
              {results.map((pkg) => (
                <Link
                  key={pkg.id}
                  to="/package/$id"
                  params={{ id: pkg.id }}
                  onClick={() => {
                    setOpen(false);
                    setQuery("");
                  }}
                  className="flex min-h-20 items-center gap-3 rounded-md p-2 transition-colors hover:bg-accent focus-visible:bg-accent focus-visible:outline-none"
                >
                  <img
                    src={pkg.image}
                    alt=""
                    className="h-16 w-20 shrink-0 rounded-md border bg-secondary object-contain"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold leading-snug">{pkg.name}</span>
                    <span className="mt-1 block truncate text-xs text-muted-foreground">
                      {pkg.description}
                    </span>
                  </span>
                  <span className="shrink-0 font-display font-semibold text-primary">
                    ₹{pkg.offer.toLocaleString("en-IN")}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="px-4 py-10 text-center text-sm text-muted-foreground">
              No decoration packages found. Try another search.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}