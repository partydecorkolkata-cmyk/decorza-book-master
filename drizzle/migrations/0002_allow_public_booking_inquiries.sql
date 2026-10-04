GRANT INSERT ON public.bookings TO anon;
GRANT INSERT ON public.bookings TO authenticated;

CREATE POLICY "Public can submit new booking inquiries"
ON public.bookings
FOR INSERT
TO anon, authenticated
WITH CHECK (
  status = 'New Lead'
  AND advance_amount = 0
  AND balance_due = 0
  AND internal_notes = ''
);