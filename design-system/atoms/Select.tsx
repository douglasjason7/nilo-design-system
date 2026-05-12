import { forwardRef, SelectHTMLAttributes } from "react";
import { cn } from "../utils/cn";

type State = "default" | "error" | "disabled";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  state?: State;
  options: Option[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ state = "default", options, placeholder, className, disabled, ...props }, ref) => {
    const isDisabled = disabled || state === "disabled";
    const isError    = state === "error";

    return (
      <div className="relative w-full">
        <select
          ref={ref}
          disabled={isDisabled}
          aria-invalid={isError || undefined}
          className={cn(
            "w-full h-11 appearance-none rounded-lg bg-bg border px-4 pr-10",
            "font-body text-body-md text-fg",
            "outline-none transition-all duration-base",
            "focus:border-accent focus:ring-2 focus:ring-accent/20",
            "disabled:opacity-40 disabled:cursor-not-allowed",
            isError ? "border-error-500 focus:ring-error-500/30" : "border-border",
            className
          )}
          {...props}
        >
          {placeholder && <option value="" disabled hidden>{placeholder}</option>}
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-fg-muted" />
      </div>
    );
  }
);
Select.displayName = "Select";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
