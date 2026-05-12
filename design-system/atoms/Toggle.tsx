import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  size?: "sm" | "md";
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, className, size = "md", id, disabled, ...props }, ref) => {
    const inputId = id ?? (label ? `tg-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
    const dims = size === "sm"
      ? { track: "w-8 h-4", thumb: "w-3 h-3", on: "translate-x-4" }
      : { track: "w-10 h-6", thumb: "w-4 h-4", on: "translate-x-4" };

    return (
      <label htmlFor={inputId} className={cn("inline-flex items-center gap-2 cursor-pointer select-none", disabled && "opacity-40 cursor-not-allowed", className)}>
        <span className={cn("relative inline-flex items-center rounded-full bg-neutral-700 transition-colors duration-base", "peer-checked:bg-accent", dims.track)}>
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            role="switch"
            disabled={disabled}
            className="peer absolute inset-0 opacity-0 cursor-inherit focus-visible:outline-none"
            {...props}
          />
          <span aria-hidden className={cn(
            "absolute left-1 inline-block rounded-full bg-fg shadow-sm transition-transform duration-base",
            "peer-checked:" + dims.on,
            dims.thumb
          )} />
        </span>
        {label && <span className="font-body text-body-sm text-fg">{label}</span>}
      </label>
    );
  }
);
Toggle.displayName = "Toggle";
