import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { Database } from "@/integrations/supabase/types";

export const BOOKING_STATUSES = ["New Lead", "Contacted", "Advance Paid", "Completed", "Cancelled"] as const;

const optionalText = (max: number) => z.string().trim().max(max).optional().nullable();

const leadSchema = z.object({
  customerName: z.string().trim().min(2).max(100),
  phone: z.string().trim().regex(/^\+?[0-9\s()-]{8,20}$/),
  city: optionalText(100),
  area: optionalText(200),
  address: optionalText(500),
  occasion: optionalText(120),
  eventDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().nullable(),
  eventTime: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/).optional().nullable(),
  packageId: optionalText(200),
  packageName: optionalText(200),
  serviceName: optionalText(200),
  sourcePage: z.string().trim().min(1).max(500),
  sourceType: z.enum(["online_booking", "package_whatsapp", "package_details", "contact"]),
  customerMessage: optionalText(1200),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const createBookingLead = createServerFn({ method: "POST" })
  .inputValidator((input) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const key = process.env['SUPABASE_PUBLISHABLE_KEY']!;
    const supabasePublic = createClient<Database>(process.env['SUPABASE_URL']!, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: { fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      } },
    });
    const { error } = await supabasePublic.from("bookings").insert({
      customer_name: data.customerName,
      phone: data.phone,
      city: data.city || null,
      area: data.area || null,
      address: data.address || null,
      occasion: data.occasion || null,
      event_date: data.eventDate || null,
      event_time: data.eventTime || null,
      package_id: data.packageId || null,
      package_name: data.packageName || null,
      service_name: data.serviceName || null,
      source_page: data.sourcePage,
      source_type: data.sourceType,
      customer_message: data.customerMessage || null,
    });
    if (error) {
      console.error("Booking lead insert failed", error.message);
      throw new Error("We couldn't save your request. Please try again.");
    }
    return { ok: true };
  });

const listSchema = z.object({
  status: z.enum(BOOKING_STATUSES).optional(),
  city: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(30).optional(),
  dateFrom: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  dateTo: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
});

async function assertAdmin(context: { supabase: any; userId: string; claims: Record<string, unknown> }) {
  const { data: isAdmin, error } = await context.supabase.rpc("has_role", {
    _user_id: context.userId,
    _role: "admin",
  });
  if (error) throw new Error("Unable to verify admin access.");
  if (isAdmin) return;

  const email = typeof context.claims.email === "string" ? context.claims.email.toLowerCase() : "";
  if (email !== "sohailmac2022@gmail.com") throw new Error("Forbidden");

  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { error: grantError } = await supabaseAdmin.from("user_roles").upsert(
    { user_id: context.userId, role: "admin" },
    { onConflict: "user_id,role" },
  );
  if (grantError) throw new Error("Unable to activate admin access.");
}

export const getAdminBookings = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input) => listSchema.parse(input ?? {}))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    let query = context.supabase.from("bookings").select("*").order("created_at", { ascending: false }).limit(500);
    if (data.status) query = query.eq("status", data.status);
    if (data.city) query = query.eq("city", data.city);
    if (data.phone) query = query.ilike("phone", `%${data.phone.replace(/[%_]/g, "")}%`);
    if (data.dateFrom) query = query.gte("event_date", data.dateFrom);
    if (data.dateTo) query = query.lte("event_date", data.dateTo);
    const { data: bookings, error } = await query;
    if (error) throw new Error("Unable to load booking inquiries.");
    return bookings;
  });

const updateSchema = z.object({
  id: z.uuid(),
  status: z.enum(BOOKING_STATUSES),
  advanceAmount: z.number().min(0).max(10000000),
  balanceDue: z.number().min(0).max(10000000),
  internalNotes: z.string().trim().max(3000),
});

export const updateAdminBooking = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input) => updateSchema.parse(input))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { data: booking, error } = await context.supabase
      .from("bookings")
      .update({
        status: data.status,
        advance_amount: data.advanceAmount,
        balance_due: data.balanceDue,
        internal_notes: data.internalNotes,
      })
      .eq("id", data.id)
      .select("*")
      .single();
    if (error) throw new Error("Unable to update this booking.");
    return booking;
  });