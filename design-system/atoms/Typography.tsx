import { ElementType, HTMLAttributes } from "react";
import { cn } from "../utils/cn";

/* ─────────────────────────────────────────────
   STYLE MAPS — single source of truth for every
   typographic style in the design system.
   Use these constants directly or via components.
───────────────────────────────────────────── */

export const typographyStyles = {
  /* Display — large marketing / hero text */
  "display-2xl": "font-display font-normal text-display-2xl tracking-tight",
  "display-xl":  "font-display font-normal text-display-xl  tracking-tight",
  "display-lg":  "font-display font-normal text-display-lg  tracking-tight",

  /* Heading — section and card titles */
  "heading-xl":  "font-display font-medium text-heading-xl",
  "heading-lg":  "font-display font-medium text-heading-lg",
  "heading-md":  "font-display font-medium text-heading-md",

  /* Body — paragraphs and flowing prose */
  "body-lg":     "font-body font-normal text-body-lg",
  "body-md":     "font-body font-normal text-body-md",
  "body-sm":     "font-body font-normal text-body-sm",

  /* Label — UI labels, buttons, nav */
  "label-lg":    "font-body font-medium  text-label-lg",
  "label-sm":    "font-body font-semibold text-label-sm",

  /* Caption — meta info, timestamps, footnotes */
  "caption":     "font-body font-normal text-caption",
} as const;

export type TypographyStyle = keyof typeof typographyStyles;

/* ─────────────────────────────────────────────
   DISPLAY
───────────────────────────────────────────── */

type DisplaySize = "2xl" | "xl" | "lg";

interface DisplayProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: DisplaySize;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  balance?: boolean;
}

export function Display({
  size = "xl",
  as: Tag = "h1",
  balance = true,
  className,
  children,
  ...props
}: DisplayProps) {
  return (
    <Tag
      className={cn(
        typographyStyles[`display-${size}`],
        "text-fg",
        balance && "text-balance",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ─────────────────────────────────────────────
   HEADING
───────────────────────────────────────────── */

type HeadingSize = "xl" | "lg" | "md";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: HeadingSize;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export function Heading({
  size = "lg",
  as: Tag = "h2",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(typographyStyles[`heading-${size}`], "text-fg", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ─────────────────────────────────────────────
   BODY
───────────────────────────────────────────── */

type BodySize = "lg" | "md" | "sm";

interface BodyProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: BodySize;
  muted?: boolean;
  as?: ElementType;
}

export function Body({
  size = "md",
  muted = false,
  as: Tag = "p",
  className,
  children,
  ...props
}: BodyProps) {
  return (
    <Tag
      className={cn(
        typographyStyles[`body-${size}`],
        muted ? "text-fg-subtle" : "text-fg-muted",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ─────────────────────────────────────────────
   LABEL
───────────────────────────────────────────── */

type LabelSize = "lg" | "sm";

interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
  size?: LabelSize;
  muted?: boolean;
  uppercase?: boolean;
}

export function Label({
  size = "lg",
  muted = false,
  uppercase = false,
  className,
  children,
  ...props
}: LabelProps) {
  return (
    <span
      className={cn(
        typographyStyles[`label-${size}`],
        muted ? "text-fg-subtle" : "text-fg-muted",
        uppercase && "uppercase tracking-widest",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   CAPTION
───────────────────────────────────────────── */

export function Caption({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(typographyStyles.caption, "text-fg-subtle", className)}
      {...props}
    >
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   TEXT — generic polymorphic component
   Use when you need any style without a
   dedicated wrapper (e.g. <Text style="label-sm">)
───────────────────────────────────────────── */

interface TextProps extends Omit<HTMLAttributes<HTMLElement>, "style"> {
  variant: TypographyStyle;
  as?: ElementType;
}

export function Text({
  variant,
  as: Tag = "span",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cn(typographyStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
