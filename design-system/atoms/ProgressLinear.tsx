import { cn } from "../utils/cn";

type Tone = "accent" | "success" | "warning" | "error";
type Size = "sm" | "md" | "lg";

interface ProgressLinearProps {
  value: number;
  tone?: Tone;
  size?: Size;
  showLabel?: boolean;
  className?: string;
  "aria-label"?: string;
}

const fills: Record<Tone, string> = {
  accent:  "bg-accent",
  success: "bg-success-500",
  warning: "bg-warning-500",
  error:   "bg-error-500",
};

const trackSizes: Record<Size, string> = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
};

export function ProgressLinear({
  value,
  tone = "accent",
  size = "md",
  showLabel = false,
  className,
  "aria-label": ariaLabel,
}: ProgressLinearProps) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      {showLabel && (
        <div className="flex items-center justify-between text-caption">
          <span className="font-body text-fg-muted">{ariaLabel ?? "Progresso"}</span>
          <span className="font-body font-semibold text-fg">{pct}%</span>
        </div>
      )}
      <div
        role="progressbar"
        aria-label={ariaLabel}
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn("w-full overflow-hidden rounded-full bg-elevated", trackSizes[size])}
      >
        <div
          className={cn("h-full rounded-full transition-[width] duration-slow", fills[tone])}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
