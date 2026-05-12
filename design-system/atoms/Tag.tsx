import { HTMLAttributes, KeyboardEvent } from "react";
import { cn } from "../utils/cn";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  active?:      boolean;
  interactive?: boolean;
}

export function Tag({
  active = false,
  interactive = false,
  className,
  children,
  onClick,
  ...props
}: TagProps) {
  function handleKeyDown(e: KeyboardEvent<HTMLSpanElement>) {
    if (interactive && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick?.(e as unknown as React.MouseEvent<HTMLSpanElement>);
    }
  }

  return (
    <span
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={interactive ? onClick : undefined}
      onKeyDown={interactive ? handleKeyDown : undefined}
      aria-pressed={interactive ? active : undefined}
      className={cn(
        "inline-flex items-center h-8 px-3 rounded-full",
        "font-body text-body-sm font-medium",
        "border transition-all duration-base ease",
        active
          ? "bg-fg text-bg border-fg"
          : "bg-transparent text-fg-muted border-border",
        interactive && !active && "hover:border-neutral-500 hover:text-fg cursor-pointer",
        interactive && "select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
