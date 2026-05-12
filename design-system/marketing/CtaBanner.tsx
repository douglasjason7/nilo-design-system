import { cn } from "../utils/cn";
import { Button } from "../atoms/Button";

interface CtaBannerProps {
  headline:         string;
  subtext?:         string;
  primaryCtaLabel:   string;
  secondaryCtaLabel?: string;
  onPrimaryClick?:   () => void;
  onSecondaryClick?: () => void;
  variant?:          "dark" | "accent" | "full-bleed";
  className?:        string;
}

const variantStyles = {
  dark:       "bg-surface border border-border rounded-2xl",
  accent:     "bg-accent-subtle border border-accent-800 rounded-2xl",
  "full-bleed":"bg-surface border-y border-border",
};

export function CtaBanner({
  headline,
  subtext,
  primaryCtaLabel,
  secondaryCtaLabel,
  onPrimaryClick,
  onSecondaryClick,
  variant = "dark",
  className,
}: CtaBannerProps) {
  return (
    <section
      className={cn(
        "py-24 px-6 xl:px-20",
        variant !== "full-bleed" && "max-w-container mx-auto w-full"
      )}
    >
      <div
        className={cn(
          "flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 p-10 lg:p-16",
          variantStyles[variant]
        )}
      >
        <div className="flex flex-col gap-4 max-w-xl">
          <h2
            className={cn(
              "font-display text-display-lg text-fg tracking-tight text-balance",
              variant === "accent" && "text-accent-200"
            )}
          >
            {headline}
          </h2>
          {subtext && (
            <p className="font-body text-body-md text-fg-muted">{subtext}</p>
          )}
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <Button variant="primary" size="lg" onClick={onPrimaryClick}>
            {primaryCtaLabel}
          </Button>
          {secondaryCtaLabel && (
            <Button variant="ghost" size="lg" onClick={onSecondaryClick}>
              {secondaryCtaLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
