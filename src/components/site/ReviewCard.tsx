import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ReviewCard({
  name,
  city,
  service,
  text,
  rating,
}: {
  name: string;
  city: string;
  service: string;
  text: string;
  rating: number;
}) {
  return (
    <Card className="flex h-full flex-col gap-3 p-5">
      <div className="flex items-center gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={i < rating ? "h-4 w-4 fill-gold" : "h-4 w-4 opacity-30"} />
        ))}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-foreground/85">“{text}”</p>
      <div className="border-t pt-3">
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs text-muted-foreground">{service} · {city}</p>
      </div>
    </Card>
  );
}
