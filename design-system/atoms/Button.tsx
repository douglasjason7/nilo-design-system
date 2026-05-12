import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "accent";
type Size    = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?:    Size;
  loading?: boolean;
  icon?:    React.ReactNode;
  iconPosition?: "left" | "right";
}

const variants: Record<Variant, string> = {
  primary:
    "bg-fg text-bg hover:bg-neutral-200 active:bg-neutral-300",
  secondary:
    "bg-elevated text-fg hover:bg-neutral-700 active:bg-neutral-600 border border-border",
  ghost:
    "bg-transparent text-fg hover:bg-elevated active:bg-neutral-700",
  outline:
    "bg-transparent text-fg border border-border hover:border-neutral-500 hover:bg-surface",
  accent:
    "bg-accent text-bg hover:bg-accent-hover active:bg-accent-600 shadow-accent",
};

const sizes: Record<Size, string> = {
  sm: "h-8  px-4  text-label-lg gap-1.5",
  md: "h-10 px-5  text-body-sm  gap-2",
  lg: "h-12 px-6  text-body-md  gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      iconPosition = "left",
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          "inline-flex items-center justify-center font-body font-medium rounded-full",
          "transition-all duration-base ease",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
          "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <SpinnerIcon className="w-4 h-4 animate-spin" />
        ) : (
          <>
            {icon && iconPosition === "left" && (
              <span className="shrink-0">{icon}</span>
            )}
            {children}
            {icon && iconPosition === "right" && (
              <span className="shrink-0">{icon}</span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

function SpinnerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12" cy="12" r="10"
        stroke="currentColor" strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
