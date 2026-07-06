import { cn } from "../utils/cn";

type Tone = "accent" | "success" | "warning" | "error";
type Size = "sm" | "md" | "lg";

interface ProgressCircularProps {
  value: number;
  tone?: Tone;
  size?: Size;
  showValue?: boolean;
  className?: string;
  "aria-label"?: string;
}

const toneColors: Record<Tone, string> = {
  accent:  "text-accent",
  success: "text-success-500",
  warning: "text-warning-500",
  error:   "text-error-500",
};

const sizes: Record<Size, { box: string; value: string }> = {
  sm: { box: "w-16 h-16", value: "text-body-sm"  },
  md: { box: "w-24 h-24", value: "text-body-lg"  },
  lg: { box: "w-32 h-32", value: "text-heading-md" },
};

// Geometria em unidades do viewBox (0-100); raio 45 → circunferência ≈ 282.74
const R = 45;
const C = 2 * Math.PI * R;

export function ProgressCircular({
  value,
  tone = "accent",
  size = "md",
  showValue = false,
  className,
  "aria-label": ariaLabel,
}: ProgressCircularProps) {
  const pct = Math.max(0, Math.min(100, value));
  const offset = C * (1 - pct / 100);
  return (
    <div
      role="progressbar"
      aria-label={ariaLabel}
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("relative inline-flex items-center justify-center", sizes[size].box, className)}
    >
      <svg viewBox="0 0 100 100" fill="none" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={R} stroke="currentColor" strokeWidth="8" className="text-elevated" />
        <circle
          cx="50"
          cy="50"
          r={R}
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={offset}
          className={cn("transition-[stroke-dashoffset] duration-slow", toneColors[tone])}
        />
      </svg>
      {showValue && (
        <span className={cn("absolute font-body font-semibold text-fg", sizes[size].value)}>
          {pct}%
        </span>
      )}
    </div>
  );
}
