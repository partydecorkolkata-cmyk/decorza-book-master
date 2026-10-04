import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { CalendarDays, IndianRupee, LogOut, MapPin, MessageSquareText, Phone, Search, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BOOKING_STATUSES, getAdminBookings, updateAdminBooking } from "@/lib/bookings.functions";
import { BRAND } from "@/lib/brand";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type Booking = Tables<"bookings">;

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({ meta: [
    { title: "Booking Dashboard | Decorza Events" },
    { name: "description", content: "Secure Decorza Events booking and inquiry management dashboard." },
    { property: "og:title", content: "Booking Dashboard | Decorza Events" },
    { property: "og:description", content: "Secure Decorza Events booking and inquiry management dashboard." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "robots", content: "noindex, nofollow" },
  ] }),
  component: AdminDashboard,
});

function AdminDashboard() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const loadBookings = useServerFn(getAdminBookings);
  const saveBooking = useServerFn(updateAdminBooking);
  const [status, setStatus] = useState("all");
  const [city, setCity] = useState("all");
  const [phone, setPhone] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const filters = useMemo(() => ({
    status: status === "all" ? undefined : status as (typeof BOOKING_STATUSES)[number],
    city: city === "all" ? undefined : city,
    phone: phone.trim() || undefined,
    dateFrom: dateFrom || undefined,
    dateTo: dateTo || undefined,
  }), [status, city, phone, dateFrom, dateTo]);

  const bookingsQuery = useQuery({
    queryKey: ["admin-bookings", filters],
    queryFn: () => loadBookings({ data: filters }),
  });
  const updateMutation = useMutation({
    mutationFn: (data: { id: string; status: (typeof BOOKING_STATUSES)[number]; advanceAmount: number; balanceDue: number; internalNotes: string }) => saveBooking({ data }),
    onSuccess: () => { void queryClient.invalidateQueries({ queryKey: ["admin-bookings"] }); toast.success("Booking updated."); },
    onError: (error) => toast.error(error instanceof Error ? error.message : "Update failed."),
  });

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    await navigate({ to: "/auth", replace: true });
  }

  const bookings = bookingsQuery.data ?? [];
  const totalAdvance = bookings.reduce((sum, item) => sum + Number(item.advance_amount), 0);
  const totalBalance = bookings.reduce((sum, item) => sum + Number(item.balance_due), 0);

  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="border-b bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div><p className="text-xs font-semibold uppercase text-primary">Decorza Events</p><h1 className="font-display text-2xl sm:text-3xl">Booking Dashboard</h1></div>
          <Button variant="outline" size="sm" onClick={signOut}><LogOut className="mr-2 h-4 w-4" /> Sign out</Button>
        </div>
      </div>
      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Metric icon={Users} label="Visible leads" value={String(bookings.length)} />
          <Metric icon={MessageSquareText} label="New leads" value={String(bookings.filter((item) => item.status === "New Lead").length)} />
          <Metric icon={IndianRupee} label="Advance received" value={`₹${totalAdvance.toLocaleString("en-IN")}`} />
          <Metric icon={IndianRupee} label="Balance due" value={`₹${totalBalance.toLocaleString("en-IN")}`} />
        </div>

        <section className="border-y bg-background py-4">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <div className="relative"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input aria-label="Search phone number" placeholder="Search phone" value={phone} onChange={(event) => setPhone(event.target.value)} className="pl-9" /></div>
            <Select value={status} onValueChange={setStatus}><SelectTrigger><SelectValue placeholder="All statuses" /></SelectTrigger><SelectContent><SelectItem value="all">All statuses</SelectItem>{BOOKING_STATUSES.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select>
            <Select value={city} onValueChange={setCity}><SelectTrigger><SelectValue placeholder="All cities" /></SelectTrigger><SelectContent><SelectItem value="all">All cities</SelectItem>{BRAND.cities.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select>
            <Input aria-label="Event date from" type="date" value={dateFrom} onChange={(event) => setDateFrom(event.target.value)} />
            <Input aria-label="Event date to" type="date" value={dateTo} onChange={(event) => setDateTo(event.target.value)} />
          </div>
        </section>

        {bookingsQuery.isLoading && <p className="py-12 text-center text-muted-foreground">Loading inquiries…</p>}
        {bookingsQuery.isError && <div className="border border-destructive/40 bg-destructive/10 p-5 text-sm text-destructive">{bookingsQuery.error instanceof Error ? bookingsQuery.error.message : "Unable to load inquiries."}</div>}
        {!bookingsQuery.isLoading && !bookingsQuery.isError && bookings.length === 0 && <div className="border bg-background p-10 text-center"><p className="font-display text-xl">No inquiries found</p><p className="mt-1 text-sm text-muted-foreground">Try changing the filters.</p></div>}
        <div className="grid gap-4 xl:grid-cols-2">
          {bookings.map((booking) => <BookingEditor key={booking.id} booking={booking} saving={updateMutation.isPending} onSave={(data) => updateMutation.mutate(data)} />)}
        </div>
      </main>
    </div>
  );
}

function Metric({ icon: Icon, label, value }: { icon: typeof Users; label: string; value: string }) {
  return <div className="border bg-background p-4"><div className="flex items-center gap-2 text-muted-foreground"><Icon className="h-4 w-4" /><span className="text-xs">{label}</span></div><p className="mt-2 font-display text-2xl">{value}</p></div>;
}

function BookingEditor({ booking, saving, onSave }: { booking: Booking; saving: boolean; onSave: (data: { id: string; status: (typeof BOOKING_STATUSES)[number]; advanceAmount: number; balanceDue: number; internalNotes: string }) => void }) {
  const [status, setStatus] = useState<(typeof BOOKING_STATUSES)[number]>(booking.status);
  const [advanceAmount, setAdvanceAmount] = useState(String(booking.advance_amount));
  const [balanceDue, setBalanceDue] = useState(String(booking.balance_due));
  const [internalNotes, setInternalNotes] = useState(booking.internal_notes);
  return <article className="border bg-background p-4 sm:p-5">
    <div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="font-display text-xl">{booking.customer_name}</h2><a href={`tel:${booking.phone}`} className="mt-1 inline-flex items-center gap-1 text-sm text-primary"><Phone className="h-3.5 w-3.5" />{booking.phone}</a></div><Badge variant={booking.status === "Cancelled" ? "destructive" : booking.status === "Completed" ? "secondary" : "default"}>{booking.status}</Badge></div>
    <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
      <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-muted-foreground" />{[booking.city, booking.area].filter(Boolean).join(" · ") || "Area not provided"}</p>
      <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-muted-foreground" />{booking.event_date ? new Date(`${booking.event_date}T00:00:00`).toLocaleDateString("en-IN") : "Date not provided"}{booking.event_time ? ` · ${booking.event_time.slice(0, 5)}` : ""}</p>
      <p><span className="text-muted-foreground">Occasion:</span> {booking.occasion || "Not provided"}</p>
      <p><span className="text-muted-foreground">Package:</span> {booking.package_name || booking.service_name || "To be discussed"}</p>
      <p className="sm:col-span-2"><span className="text-muted-foreground">Address:</span> {booking.address || "Not provided"}</p>
      {booking.customer_message && <p className="sm:col-span-2"><span className="text-muted-foreground">Customer note:</span> {booking.customer_message}</p>}
      <p className="text-xs text-muted-foreground sm:col-span-2">Source: {booking.source_type.replaceAll("_", " ")} · {booking.source_page} · Received {new Date(booking.created_at).toLocaleString("en-IN")}</p>
    </div>
    <div className="mt-5 grid gap-3 border-t pt-4 sm:grid-cols-3">
      <div><Label>Status</Label><Select value={status} onValueChange={(value) => setStatus(value as typeof status)}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{BOOKING_STATUSES.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select></div>
      <div><Label htmlFor={`advance-${booking.id}`}>Advance amount</Label><Input id={`advance-${booking.id}`} inputMode="decimal" type="number" min="0" value={advanceAmount} onChange={(event) => setAdvanceAmount(event.target.value)} /></div>
      <div><Label htmlFor={`balance-${booking.id}`}>Balance due</Label><Input id={`balance-${booking.id}`} inputMode="decimal" type="number" min="0" value={balanceDue} onChange={(event) => setBalanceDue(event.target.value)} /></div>
      <div className="sm:col-span-3"><Label htmlFor={`notes-${booking.id}`}>Internal notes</Label><Textarea id={`notes-${booking.id}`} rows={3} maxLength={3000} value={internalNotes} onChange={(event) => setInternalNotes(event.target.value)} /></div>
      <Button disabled={saving} onClick={() => onSave({ id: booking.id, status, advanceAmount: Number(advanceAmount) || 0, balanceDue: Number(balanceDue) || 0, internalNotes })} className="sm:col-span-3">Save changes</Button>
    </div>
  </article>;
}