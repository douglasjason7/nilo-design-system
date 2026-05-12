import { ReactNode } from "react";
import { cn } from "../utils/cn";

interface Feature {
  icon?: ReactNode;
  title: ReactNode;
  description: ReactNode;
}

interface FeatureGridProps {
  eyebrow?: ReactNode;
  headline?: ReactNode;
  description?: ReactNode;
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function FeatureGrid({ eyebrow, headline, description, features, columns = 3, className }: FeatureGridProps) {
  const colClass = { 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" }[columns];

  return (
    <section className={cn("py-16 md:py-20 lg:py-24", className)}>
      <div className="mx-auto max-w-container px-6 xl:px-20">
        {(eyebrow || headline || description) && (
          <div className="flex flex-col items-center text-center gap-3 max-w-xl mx-auto mb-12">
            {eyebrow && <span className="font-body font-semibold text-label-sm uppercase tracking-widest text-accent">{eyebrow}</span>}
            {headline && <h2 className="font-display font-medium text-heading-xl text-fg text-balance">{headline}</h2>}
            {description && <p className="font-body text-body-md text-fg-muted">{description}</p>}
          </div>
        )}
        <div className={cn("grid grid-cols-1 gap-6", colClass)}>
          {features.map((f, i) => (
            <article key={i} className="rounded-xl bg-surface border border-border p-6 transition-colors duration-base hover:border-neutral-700">
              {f.icon && (
                <div className="w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center mb-4">
                  {f.icon}
                </div>
              )}
              <h3 className="font-display font-medium text-heading-md text-fg mb-2">{f.title}</h3>
              <p className="font-body text-body-sm text-fg-muted">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
