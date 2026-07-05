import {
  forwardRef,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
  Ref,
} from "react";
import { cn } from "../utils/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "accent";
type Size    = "sm" | "md" | "lg";

interface ButtonOwnProps {
  variant?: Variant;
  size?:    Size;
  loading?: boolean;
  icon?:    ReactNode;
  iconPosition?: "left" | "right";
}

/* Polimórfico: sem `href` renderiza <button> (API original intacta);
   com `href` renderiza <a> com o mesmo visual/estados. */
type ButtonAsButton = ButtonOwnProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsAnchor = ButtonOwnProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; disabled?: boolean };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

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

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
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
    const isDisabled = Boolean(disabled) || loading;

    const classes = cn(
      "inline-flex items-center justify-center font-body font-medium rounded-full",
      "transition-all duration-base ease",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
      "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
      variants[variant],
      sizes[size],
      className
    );

    const content = loading ? (
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
    );

    if (props.href !== undefined) {
      /* <a> não tem :disabled nem atributo disabled — replica o estado
         via aria-disabled + classes (e bloqueia navegação/tab). */
      const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a
          {...anchorProps}
          ref={ref as Ref<HTMLAnchorElement>}
          aria-disabled={isDisabled || undefined}
          tabIndex={isDisabled ? -1 : anchorProps.tabIndex}
          className={cn(
            classes,
            "no-underline",
            isDisabled && "opacity-40 cursor-not-allowed pointer-events-none"
          )}
        >
          {content}
        </a>
      );
    }

    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        {...buttonProps}
        ref={ref as Ref<HTMLButtonElement>}
        disabled={isDisabled}
        className={classes}
      >
        {content}
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
