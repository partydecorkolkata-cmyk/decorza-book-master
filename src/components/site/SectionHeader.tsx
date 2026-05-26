export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}
