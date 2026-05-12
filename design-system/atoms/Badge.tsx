import { HTMLAttributes } from "react";
import { cn } from "../utils/cn";

type Variant = "default" | "accent" | "success" | "error" | "warning" | "outline";
type Size    = "sm" | "md";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  size?:    Size;
  dot?:     boolean;
}

const variants: Record<Variant, string> = {
  default: "bg-elevated text-fg-muted border border-border",
  accent:  "bg-accent-subtle text-accent-300 border border-accent-800",
  success: "bg-success-950 text-success-400 border border-success-800",
  error:   "bg-error-950   text-error-400   border border-error-800",
  warning: "bg-warning-950 text-warning-400 border border-warning-800",
  outline: "bg-transparent text-fg-muted   border border-border",
};

const sizes: Record<Size, string> = {
  sm: "h-5 px-2   text-label-sm gap-1",
  md: "h-6 px-2.5 text-label-lg gap-1.5",
};

const dotColors: Record<Variant, string> = {
  default: "bg-fg-muted",
  accent:  "bg-accent",
  success: "bg-success-400",
  error:   "bg-error-400",
  warning: "bg-warning-400",
  outline: "bg-fg-muted",
};

export function Badge({
  variant = "default",
  size = "md",
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-body font-semibold uppercase tracking-wide",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant])}
        />
      )}
      {children}
    </span>
  );
}
