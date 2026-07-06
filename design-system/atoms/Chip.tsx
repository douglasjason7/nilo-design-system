import { KeyboardEvent, MouseEvent, ReactNode } from "react";
import { cn } from "../utils/cn";

type Variant = "assist" | "filter" | "input";

interface ChipProps {
  variant?:     Variant;
  selected?:    boolean;
  disabled?:    boolean;
  leadingIcon?: ReactNode;
  onDismiss?:   () => void;
  onClick?:     (e: MouseEvent<HTMLSpanElement>) => void;
  className?:   string;
  children?:    ReactNode;
}

// Estado base (não selecionado) — chip neutro sobre superfície elevada
const baseStyle = "bg-elevated text-fg-muted border-border hover:border-neutral-500 hover:text-fg";

// Estado selecionado por variante. Filter = fundo cheio; demais = accent sutil.
const selectedStyle: Record<Variant, string> = {
  assist: "bg-accent-subtle text-accent-300 border-accent-800",
  input:  "bg-accent-subtle text-accent-300 border-accent-800",
  filter: "bg-accent text-accent-50 border-accent hover:bg-accent-hover",
};

export function Chip({
  variant = "assist",
  selected = false,
  disabled = false,
  leadingIcon,
  onDismiss,
  onClick,
  className,
  children,
}: ChipProps) {
  const clickable = !!onClick && !disabled;

  function handleKeyDown(e: KeyboardEvent<HTMLSpanElement>) {
    if (clickable && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick?.(e as unknown as MouseEvent<HTMLSpanElement>);
    }
  }

  function handleDismiss(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    onDismiss?.();
  }

  return (
    <span
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      aria-pressed={clickable ? selected : undefined}
      aria-disabled={disabled || undefined}
      onClick={clickable ? onClick : undefined}
      onKeyDown={clickable ? handleKeyDown : undefined}
      className={cn(
        "inline-flex items-center gap-1.5 h-7 px-3 rounded-full",
        "font-body text-label-lg font-medium border select-none",
        "transition-all duration-base ease",
        selected ? selectedStyle[variant] : baseStyle,
        clickable && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        disabled && "opacity-40 pointer-events-none",
        className
      )}
    >
      {leadingIcon && <span className="shrink-0 inline-flex w-3.5 h-3.5">{leadingIcon}</span>}
      {children}
      {onDismiss && (
        <button
          type="button"
          aria-label="Remover"
          disabled={disabled}
          onClick={handleDismiss}
          className="shrink-0 inline-flex -mr-1 ml-0.5 rounded-full p-0.5 text-current opacity-70 hover:opacity-100 transition-opacity duration-fast focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current"
        >
          <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-2.5 h-2.5">
            <path d="M2 2l6 6M8 2l-6 6" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </span>
  );
}
