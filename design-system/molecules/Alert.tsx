import { ReactNode } from "react";
import { cn } from "../utils/cn";

type Variant = "info" | "success" | "warning" | "error";

interface AlertProps {
  variant?: Variant;
  title?: string;
  children?: ReactNode;
  icon?: ReactNode;
  onClose?: () => void;
  className?: string;
}

const variants: Record<Variant, { container: string; iconColor: string; title: string }> = {
  info:    { container: "bg-info-950 border-info-800",       iconColor: "text-info-400",    title: "text-info-50" },
  success: { container: "bg-success-950 border-success-800", iconColor: "text-success-400", title: "text-success-50" },
  warning: { container: "bg-warning-950 border-warning-800", iconColor: "text-warning-400", title: "text-warning-50" },
  error:   { container: "bg-error-950 border-error-800",     iconColor: "text-error-400",   title: "text-error-50" },
};

const defaultIcons: Record<Variant, ReactNode> = {
  info:    <CircleIcon char="i" />,
  success: <CheckIcon />,
  warning: <CircleIcon char="!" />,
  error:   <CircleIcon char="×" />,
};

export function Alert({ variant = "info", title, children, icon, onClose, className }: AlertProps) {
  const v = variants[variant];
  return (
    <div role="alert" className={cn("flex gap-3 rounded-lg border px-4 py-3", v.container, className)}>
      <span className={cn("shrink-0 mt-0.5 w-4 h-4", v.iconColor)}>{icon ?? defaultIcons[variant]}</span>
      <div className="flex-1 min-w-0">
        {title && <p className={cn("font-body font-medium text-body-sm", v.title)}>{title}</p>}
        {children && <div className="font-body text-body-sm text-fg-muted mt-0.5">{children}</div>}
      </div>
      {onClose && (
        <button onClick={onClose} aria-label="Dismiss" className="shrink-0 text-fg-muted hover:text-fg transition-colors duration-base">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
      <path d="M3 8.5L6.5 12L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CircleIcon({ char }: { char: string }) {
  return (
    <svg viewBox="0 0 16 16" className="w-full h-full">
      <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="8" y="11" textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor">{char}</text>
    </svg>
  );
}
