import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  indeterminate?: boolean;
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ indeterminate, label, className, id, disabled, ...props }, ref) => {
    const inputId = id ?? (label ? `cb-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

    return (
      <label htmlFor={inputId} className={cn("inline-flex items-center gap-2 cursor-pointer select-none", disabled && "opacity-40 cursor-not-allowed", className)}>
        <span className="relative inline-flex items-center justify-center">
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            disabled={disabled}
            aria-checked={indeterminate ? "mixed" : undefined}
            className={cn(
              "peer appearance-none w-4 h-4 rounded-[4px] border border-border bg-bg",
              "transition-colors duration-base",
              "checked:bg-accent checked:border-accent",
              "indeterminate:bg-accent indeterminate:border-accent",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            )}
            {...props}
          />
          {/* Check */}
          <svg className="pointer-events-none absolute w-3 h-3 text-bg opacity-0 peer-checked:opacity-100" viewBox="0 0 12 12" fill="none">
            <path d="M2 6.5L4.5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {/* Indeterminate dash (rendered when prop set) */}
          {indeterminate && (
            <span className="pointer-events-none absolute h-0.5 w-2 bg-bg rounded-full" />
          )}
        </span>
        {label && <span className="font-body text-body-sm text-fg">{label}</span>}
      </label>
    );
  }
);
Checkbox.displayName = "Checkbox";
