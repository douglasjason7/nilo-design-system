import { ReactNode } from "react";
import { cn } from "../utils/cn";

type Tone = "default" | "accent" | "success" | "error";

interface Trend {
  direction: "up" | "down";
  value: string;
}

interface BigNumberProps {
  value:      ReactNode;
  label:      string;
  tone?:      Tone;
  trend?:     Trend;
  helpText?:  string;
  className?: string;
}

/* Cor do número por tone */
const toneColors: Record<Tone, string> = {
  default: "text-fg",
  accent:  "text-accent-400",
  success: "text-success-400",
  error:   "text-error-400",
};

/* Estilo do pill de tendência */
const trendStyles = {
  up:   { pill: "bg-success-950 text-success-400", label: "text-success-400" },
  down: { pill: "bg-error-950   text-error-400",   label: "text-error-400"   },
};

export function BigNumber({
  value,
  label,
  tone = "default",
  trend,
  helpText,
  className,
}: BigNumberProps) {
  return (
    <div className={cn("flex flex-col gap-2 items-start", className)}>
      {/* Rótulo do KPI */}
      <p className="font-body text-body-sm text-fg-muted uppercase tracking-wide">
        {label}
      </p>

      {/* Número grande */}
      <p className={cn("font-display text-display-lg", toneColors[tone])}>
        {value}
      </p>

      {/* Tendência opcional */}
      {trend && (
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full pl-2.5 pr-3 py-1",
            trendStyles[trend.direction].pill
          )}
        >
          <TrendArrow direction={trend.direction} />
          <span className="font-body font-semibold text-label-lg">
            {trend.value}
          </span>
        </span>
      )}

      {/* Texto de apoio */}
      {helpText && (
        <p className="font-body text-body-sm text-fg-muted leading-relaxed">
          {helpText}
        </p>
      )}
    </div>
  );
}

/* Seta ▲/▼ — triângulo apontado conforme a direção */
function TrendArrow({ direction }: { direction: "up" | "down" }) {
  return (
    <svg
      viewBox="0 0 10 8"
      className={cn("w-2.5 h-2 shrink-0", direction === "down" && "rotate-180")}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5 0L10 8H0L5 0Z" />
    </svg>
  );
}
