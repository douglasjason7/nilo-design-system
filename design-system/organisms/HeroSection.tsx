import { cn } from "../utils/cn";
import { Button } from "../atoms/Button";
import { Badge } from "../atoms/Badge";

interface HeroSectionProps {
  badge?:          string;
  headline:        string;
  subheadline?:    string;
  primaryCtaLabel:  string;
  secondaryCtaLabel?: string;
  onPrimaryClick?:   () => void;
  onSecondaryClick?: () => void;
  media?:           React.ReactNode;
  centered?:        boolean;
  className?:       string;
}

export function HeroSection({
  badge,
  headline,
  subheadline,
  primaryCtaLabel,
  secondaryCtaLabel,
  onPrimaryClick,
  onSecondaryClick,
  media,
  centered = false,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative min-h-screen flex flex-col",
        "pt-32 pb-20 px-6 xl:px-20",
        "max-w-container mx-auto w-full",
        centered && "items-center text-center",
        className
      )}
    >
      {/* Noise / grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Accent glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-500/5 blur-[120px] rounded-full" />

      <div className={cn("relative flex flex-col gap-8 max-w-4xl", centered && "items-center mx-auto")}>
        {badge && (
          <div className="animate-fade-in">
            <Badge variant="accent" dot>{badge}</Badge>
          </div>
        )}

        <h1
          className={cn(
            "font-display font-normal text-fg tracking-tight text-balance",
            "text-display-xl md:text-display-2xl",
            "animate-fade-up"
          )}
        >
          {headline}
        </h1>

        {subheadline && (
          <p
            className={cn(
              "font-body text-body-lg text-fg-muted max-w-xl leading-relaxed",
              "animate-fade-up [animation-delay:80ms]"
            )}
          >
            {subheadline}
          </p>
        )}

        <div className={cn("flex flex-wrap gap-3 animate-fade-up [animation-delay:160ms]", centered && "justify-center")}>
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

      {media && (
        <div className="relative mt-16 w-full animate-fade-up [animation-delay:240ms]">
          {media}
        </div>
      )}
    </section>
  );
}
