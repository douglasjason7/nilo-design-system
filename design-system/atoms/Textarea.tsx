import { forwardRef, TextareaHTMLAttributes, useId } from "react";
import { cn } from "../utils/cn";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?:  string;
  error?: string;
  /* Mostra o contador de caracteres quando maxLength é definido. */
  showCount?: boolean;
}

/* Entrada de texto de múltiplas linhas. Espelha a API do Input (label, hint,
   error, forwardRef, aria-invalid/aria-describedby). Sem estado próprio, então
   não exige "use client". min-height baseado em rows (mín. 3, ver brand-kit
   components/input.md variante textarea). */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, hint, error, showCount, className, id, rows = 3, maxLength, value, defaultValue, ...props }, ref) => {
    const reactId   = useId();
    const areaId    = id ?? `ta-${reactId}`;
    const messageId = (hint || error) ? `${areaId}-message` : undefined;
    const countId   = showCount && maxLength ? `${areaId}-count` : undefined;
    const describedBy = [messageId, countId].filter(Boolean).join(" ") || undefined;

    const current = typeof value === "string" ? value.length
      : typeof defaultValue === "string" ? defaultValue.length
      : undefined;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={areaId}
            className="font-body text-label-lg font-medium text-fg"
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={areaId}
          rows={rows}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            "w-full rounded-lg bg-bg border px-4 py-2.5 resize-y min-h-[5rem]",
            "font-body text-body-md text-fg placeholder:text-fg-subtle",
            "transition-all duration-base ease outline-none",
            error
              ? "border-error-500 focus:ring-2 focus:ring-error-500/30"
              : "border-border focus:border-accent focus:ring-2 focus:ring-accent/20",
            "disabled:opacity-40 disabled:cursor-not-allowed",
            className
          )}
          {...props}
        />

        <div className="flex items-start justify-between gap-2">
          {(hint || error) ? (
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
          ) : <span />}

          {showCount && maxLength && (
            <span
              id={countId}
              className="font-body text-body-sm text-fg-muted tabular-nums shrink-0"
            >
              {current ?? 0}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
