import { cn } from "../utils/cn";

interface Stat {
  value:   string;
  label:   string;
  prefix?: string;
  suffix?: string;
}

interface StatsRowProps {
  stats:      Stat[];
  dividers?:  boolean;
  className?: string;
}

/* Resolve grid layout based on stat count */
function gridClass(count: number): string {
  if (count === 2) return "grid-cols-1 sm:grid-cols-2";
  if (count === 3) return "grid-cols-1 sm:grid-cols-3";
  return "grid-cols-2 lg:grid-cols-4"; /* 4+ */
}

export function StatsRow({ stats, dividers = true, className }: StatsRowProps) {
  const isSingleRow = stats.length <= 4;

  return (
    <section className={cn("py-16 px-6 xl:px-20 max-w-container mx-auto w-full", className)}>
      <div className={cn("grid gap-0", gridClass(stats.length))}>
        {stats.map((stat, i) => (
          <div
            key={i}
            className={cn(
              "flex flex-col gap-2 py-6 px-8",
              /*
               * Dividers: add border-left to every item except column-first items.
               * For single-row layouts (sm:grid-cols-N) this works correctly.
               * For 2-column grid on mobile, we use border-top between rows instead.
               */
              dividers && [
                /* Mobile 2-col: show top border on row-2 items (indices >= 2) */
                stats.length === 4 && i >= 2 && "border-t border-border lg:border-t-0",
                /* Single-column at mobile: border-top for all except first */
                stats.length <= 3 && i > 0 && "border-t border-border sm:border-t-0",
                /* Show left border for non-first items in single-row layout */
                i > 0 && isSingleRow && "sm:border-l border-border",
                /* For 4 stats in 2-col mobile, no left border on col-1 items */
                stats.length === 4 && i % 2 === 0 && "lg:border-l border-border",
              ]
            )}
          >
            <p className="font-display text-display-xl text-fg tracking-tight">
              {stat.prefix}{stat.value}{stat.suffix}
            </p>
            <p className="font-body text-body-sm text-fg-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
