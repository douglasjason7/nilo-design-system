import { cn } from "../utils/cn";

type Tone = "online" | "offline" | "pending" | "degraded" | "maintenance";
type Variant = "compact" | "standard" | "full";

interface StatusIndicatorProps {
  tone: Tone;
  variant?: Variant;
  label?: string;
  description?: string;
  className?: string;
}

// tone→cor via tokens Kemet (não hex do Figma): online=success, offline=neutral,
// pending=warning, degraded=sun, maintenance=info.
const tones: Record<Tone, { dot: string; text: string; pill: string }> = {
  online:      { dot: "bg-success-500", text: "text-success-400", pill: "bg-success-950 border-success-800" },
  offline:     { dot: "bg-fg-subtle",   text: "text-fg-subtle",   pill: "bg-elevated border-border" },
  pending:     { dot: "bg-warning-500", text: "text-warning-400", pill: "bg-warning-950 border-warning-800" },
  degraded:    { dot: "bg-sun-400",     text: "text-sun-400",     pill: "bg-sun-900 border-sun-700" },
  maintenance: { dot: "bg-info-500",    text: "text-info-400",    pill: "bg-info-950 border-info-800" },
};

const defaultLabels: Record<Tone, string> = {
  online:      "Online",
  offline:     "Offline",
  pending:     "Pending",
  degraded:    "Degraded",
  maintenance: "Maintenance",
};

export function StatusIndicator({
  tone,
  variant = "standard",
  label,
  description,
  className,
}: StatusIndicatorProps) {
  const t = tones[tone];
  const text = label ?? defaultLabels[tone];
  const dot = (
    <span
      className={cn(
        "shrink-0 rounded-full",
        variant === "full" ? "mt-0.5 h-3 w-3" : "h-2 w-2",
        tone === "pending" && "animate-pulse",
        t.dot
      )}
    />
  );

  if (variant === "full") {
    return (
      <div
        role="status"
        className={cn(
          "inline-flex items-start gap-3 rounded-lg border border-border bg-elevated px-4 py-3",
          className
        )}
      >
        {dot}
        <div className="flex min-w-0 flex-col gap-0.5">
          <span className="font-body font-semibold text-label-lg text-fg">{text}</span>
          {description && (
            <span className="font-body text-caption text-fg-muted">{description}</span>
          )}
        </div>
      </div>
    );
  }

  if (variant === "standard") {
    return (
      <span
        role="status"
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-body font-medium text-label-lg",
          t.pill,
          t.text,
          className
        )}
      >
        {dot}
        {text}
      </span>
    );
  }

  // compact
  return (
    <span
      role="status"
      className={cn("inline-flex items-center gap-1.5 font-body font-medium text-caption", t.text, className)}
    >
      {dot}
      {text}
    </span>
  );
}
