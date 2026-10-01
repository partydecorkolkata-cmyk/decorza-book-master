import { useState, type ReactNode } from "react";
import { CalendarCheck } from "lucide-react";
import { BookingForm } from "@/components/site/BookingForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type HomeBookingDialogProps = {
  label: string;
  icon?: ReactNode;
  className?: string;
};

export function HomeBookingDialog({ label, icon, className }: HomeBookingDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className={className}>
          {icon ?? <CalendarCheck className="mr-2 h-4 w-4" />}
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] w-[calc(100%-1rem)] max-w-3xl overflow-y-auto rounded-lg p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Plan Your Decoration</DialogTitle>
          <DialogDescription>
            Share your occasion details and optionally choose a package. We’ll continue on WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <BookingForm />
      </DialogContent>
    </Dialog>
  );
}