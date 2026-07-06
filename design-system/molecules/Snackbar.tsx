import { ReactNode } from "react";
import { cn } from "../utils/cn";

type Variant = "info" | "success" | "warning" | "error";

interface SnackbarAction {
  label:   string;
  onClick: () => void;
}

interface SnackbarProps {
  variant?:   Variant;
  message:    ReactNode;
  action?:    SnackbarAction;
  onDismiss?: () => void;
  className?: string;
}

/* Cor do ícone por variant (estilo Alert) */
const iconColors: Record<Variant, string> = {
  info:    "text-info-400",
  success: "text-success-400",
  warning: "text-warning-400",
  error:   "text-error-400",
};

const icons: Record<Variant, ReactNode> = {
  info:    <CircleIcon char="i" />,
  success: <CheckIcon />,
  warning: <CircleIcon char="!" />,
  error:   <CircleIcon char="×" />,
};

export function Snackbar({
  variant = "info",
  message,
  action,
  onDismiss,
  className,
}: SnackbarProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex items-center gap-3 rounded-lg bg-neutral-800 text-fg px-4 py-3 shadow-lg",
        className
      )}
    >
      <span className={cn("shrink-0 w-5 h-5", iconColors[variant])}>
        {icons[variant]}
      </span>

      <div className="flex-1 min-w-0 font-body text-body-sm">{message}</div>

      {action && (
        <button
          onClick={action.onClick}
          className="shrink-0 font-body text-body-sm text-accent-400 font-medium hover:text-accent-300 transition-colors duration-base"
        >
          {action.label}
        </button>
      )}

      {onDismiss && (
        <button
          onClick={onDismiss}
          aria-label="Dispensar"
          className="shrink-0 text-fg-muted hover:text-fg transition-colors duration-base"
        >
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
