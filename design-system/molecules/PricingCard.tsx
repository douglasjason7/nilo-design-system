import { cn } from "../utils/cn";
import { Button } from "../atoms/Button";
import { Badge } from "../atoms/Badge";

interface PricingFeature {
  label:    string;
  included: boolean;
}

interface PricingCardProps {
  tier:        string;
  price:       string;
  period?:     string;
  description: string;
  features:    PricingFeature[];
  ctaLabel:    string;
  highlighted?: boolean;
  badge?:       string;
  onSelect?:    () => void;
  className?:   string;
}

export function PricingCard({
  tier,
  price,
  period = "/month",
  description,
  features,
  ctaLabel,
  highlighted = false,
  badge,
  onSelect,
  className,
}: PricingCardProps) {
  return (
    <article
      className={cn(
        "relative rounded-2xl border p-8 flex flex-col gap-6",
        "transition-all duration-base ease",
        highlighted
          ? "bg-elevated border-accent shadow-accent"
          : "bg-surface border-border hover:border-border",
        className
      )}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="accent">{badge}</Badge>
        </div>
      )}

      <div>
        <p className="font-body text-label-lg font-medium text-fg-muted uppercase tracking-widest mb-3">
          {tier}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="font-display text-display-lg text-fg">{price}</span>
          {period && (
            <span className="font-body text-body-sm text-fg-muted">{period}</span>
          )}
        </div>
        <p className="font-body text-body-sm text-fg-muted mt-2">{description}</p>
      </div>

      <ul className="flex flex-col gap-3 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className={cn("w-4 h-4 rounded-full flex items-center justify-center shrink-0",
              feature.included ? "bg-accent-subtle text-accent" : "bg-elevated text-fg-subtle"
            )}>
              {feature.included ? <CheckIcon /> : <MinusIcon />}
            </span>
            <span className={cn("font-body text-body-sm", feature.included ? "text-fg-muted" : "text-fg-subtle")}>
              {feature.label}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={highlighted ? "accent" : "outline"}
        size="lg"
        className="w-full"
        onClick={onSelect}
      >
        {ctaLabel}
      </Button>
    </article>
  );
}

function CheckIcon() {
  return (
    <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
      <path d="M2.5 5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
