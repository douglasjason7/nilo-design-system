import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?:  string;
  error?: string;
  icon?:  React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, icon, className, id, ...props }, ref) => {
    const inputId   = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    const messageId = inputId ? `${inputId}-message` : undefined;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="font-body text-label-lg font-medium text-fg"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {icon && (
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-fg-muted pointer-events-none">
              {icon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            aria-invalid={error ? true : undefined}
            aria-describedby={(hint || error) ? messageId : undefined}
            className={cn(
              "w-full h-11 rounded-lg bg-bg border",
              "font-body text-body-md text-fg placeholder:text-fg-subtle",
              "transition-all duration-base ease",
              "outline-none",
              icon ? "pl-10 pr-4" : "px-4",
              error
                ? "border-error-500 focus:ring-2 focus:ring-error-500/30"
                : "border-border focus:border-accent focus:ring-2 focus:ring-accent/20",
              "disabled:opacity-40 disabled:cursor-not-allowed",
              className
            )}
            {...props}
          />
        </div>

        {(hint || error) && (
          <p
            id={messageId}
            role={error ? "alert" : undefined}
            className={cn(
              "font-body text-body-sm",
              error ? "text-error-400" : "text-fg-muted"
            )}
          >
            {error ?? hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
