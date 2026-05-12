import { cn } from "../utils/cn";
import { PricingCard } from "../molecules/PricingCard";
import { Label } from "../atoms/Typography";

interface PricingTier {
  tier:        string;
  price:       string;
  period?:     string;
  description: string;
  features:    Array<{ label: string; included: boolean }>;
  ctaLabel:    string;
  highlighted?: boolean;
  badge?:       string;
}

interface PricingSectionProps {
  eyebrow?:   string;
  headline:   string;
  subtext?:   string;
  tiers:      PricingTier[];
  className?: string;
}

export function PricingSection({
  eyebrow,
  headline,
  subtext,
  tiers,
  className,
}: PricingSectionProps) {
  return (
    <section className={cn("py-24 px-6 xl:px-20 max-w-container mx-auto w-full", className)}>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col items-center text-center gap-4 max-w-xl mx-auto">
          {eyebrow && <Label uppercase muted>{eyebrow}</Label>}
          <h2 className="font-display text-display-lg text-fg tracking-tight text-balance">
            {headline}
          </h2>
          {subtext && (
            <p className="font-body text-body-md text-fg-muted">{subtext}</p>
          )}
        </div>

        <div
          className={cn(
            "grid gap-4",
            tiers.length === 2 ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto w-full" :
            tiers.length === 3 ? "grid-cols-1 sm:grid-cols-3" :
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          )}
        >
          {tiers.map((tier, i) => (
            <PricingCard key={i} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
