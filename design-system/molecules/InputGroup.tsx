import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

type State = "default" | "focused" | "error" | "disabled";

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  leading?: ReactNode;   // addon fixo à esquerda (texto/ícone/botão)
  trailing?: ReactNode;  // addon fixo à direita
  state?:   State;       // força visual do wrapper (opcional)
  error?:   string;
  label?:   string;
}

// Addon lateral — mesma superfície de elevação com divisor herdando a borda do wrapper
const addonBase = "flex items-center px-3 text-fg-subtle font-body text-body-sm shrink-0";

export const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  ({ leading, trailing, state = "default", error, label, className, id, disabled, ...props }, ref) => {
    const inputId   = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    const messageId = inputId ? `${inputId}-message` : undefined;

    const hasError    = !!error || state === "error";
    const isDisabled  = disabled || state === "disabled";
    const forceFocus  = state === "focused";

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="font-body text-label-lg font-medium text-fg">
            {label}
          </label>
        )}

        <div
          className={cn(
            "flex items-center h-11 rounded-md border bg-elevated overflow-hidden",
            "transition-all duration-base ease",
            hasError
              ? "border-error-500 focus-within:ring-2 focus-within:ring-error-500/30"
              : "border-border focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20",
            forceFocus && !hasError && "border-accent ring-2 ring-accent/20",
            isDisabled && "opacity-40 pointer-events-none",
            className
          )}
        >
          {leading && <span className={cn(addonBase, "border-r border-border")}>{leading}</span>}

          <input
            ref={ref}
            id={inputId}
            disabled={isDisabled}
            aria-invalid={hasError || undefined}
            aria-describedby={error ? messageId : undefined}
            className={cn(
              "flex-1 min-w-0 h-full px-3.5 bg-transparent border-0 outline-none",
              "font-body text-body-md text-fg placeholder:text-fg-subtle"
            )}
            {...props}
          />

          {trailing && <span className={cn(addonBase, "border-l border-border")}>{trailing}</span>}
        </div>

        {error && (
          <p id={messageId} role="alert" className="font-body text-body-sm text-error-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup";
