import { ReactNode } from "react";
import { cn } from "../utils/cn";

interface HeroProps {
  eyebrow?: ReactNode;
  headline: ReactNode;
  description?: ReactNode;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
  visual?: ReactNode;
  align?: "center" | "split";
  className?: string;
}

export function Hero({ eyebrow, headline, description, primaryCta, secondaryCta, visual, align = "center", className }: HeroProps) {
  const isSplit = align === "split" && visual;

  return (
    <section className={cn("relative py-20 md:py-24 lg:py-32 overflow-hidden", className)}>
      <div className="absolute inset-0 ds-noise pointer-events-none" />
      <div className={cn("relative mx-auto max-w-container px-6 xl:px-20", isSplit ? "grid lg:grid-cols-2 gap-12 items-center" : "")}>
        <div className={cn("flex flex-col gap-6", isSplit ? "" : "items-center text-center mx-auto max-w-3xl")}>
          {eyebrow && (
            <span className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface font-body font-semibold text-label-sm uppercase tracking-widest text-accent shadow-accent">
              {eyebrow}
            </span>
          )}
          <h1 className={cn(
            "font-display font-normal text-display-lg md:text-display-xl lg:text-display-2xl text-fg tracking-tight text-balance",
            isSplit ? "" : "mx-auto"
          )}>
            {headline}
          </h1>
          {description && (
            <p className={cn("font-body text-body-lg text-fg-muted text-balance", isSplit ? "max-w-lg" : "max-w-2xl mx-auto")}>
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className={cn("flex flex-wrap gap-3 mt-2", isSplit ? "" : "justify-center")}>
              {primaryCta}
              {secondaryCta}
            </div>
          )}
        </div>
        {isSplit && <div className="relative">{visual}</div>}
      </div>
    </section>
  );
}
