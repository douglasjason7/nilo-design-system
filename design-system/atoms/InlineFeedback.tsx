import { ReactNode } from "react";
import { cn } from "../utils/cn";

type Variant = "info" | "success" | "warning" | "error";

interface InlineFeedbackProps {
  variant: Variant;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

const colors: Record<Variant, string> = {
  info:    "text-info-400",
  success: "text-success-400",
  warning: "text-warning-400",
  error:   "text-error-400",
};

const defaultIcons: Record<Variant, ReactNode> = {
  info:    <CircleIcon char="i" />,
  success: <CheckIcon />,
  warning: <CircleIcon char="!" />,
  error:   <CircleIcon char="×" />,
};

export function InlineFeedback({ variant, children, icon, className }: InlineFeedbackProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-1.5 font-body text-body-sm", colors[variant], className)}
    >
      <span className="h-4 w-4 shrink-0">{icon ?? defaultIcons[variant]}</span>
      {children}
    </span>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="h-full w-full">
      <path d="M3 8.5L6.5 12L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CircleIcon({ char }: { char: string }) {
  return (
    <svg viewBox="0 0 16 16" className="h-full w-full">
      <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="8" y="11" textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor">{char}</text>
    </svg>
  );
}
