import { HTMLAttributes } from "react";
import { cn } from "../utils/cn";

type CardVariant = "default" | "elevated" | "outlined" | "ghost" | "glass";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?:  CardVariant;
  hoverable?: boolean;
  padding?:  "none" | "sm" | "md" | "lg";
}

const variants: Record<CardVariant, string> = {
  default:  "bg-surface border border-border",
  elevated: "bg-elevated border border-border shadow-md",
  outlined: "bg-transparent border border-border",
  ghost:    "bg-transparent",
  glass:    "bg-white/[0.07] backdrop-blur-glass border border-[rgba(184,132,255,0.16)] shadow-glass",
};

const paddings = {
  none: "",
  sm:   "p-4",
  md:   "p-6",
  lg:   "p-8",
};

export function Card({
  variant = "default",
  hoverable = false,
  padding = "md",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden",
        "transition-all duration-base ease",
        variants[variant],
        paddings[padding],
        hoverable && "hover:border-neutral-700 hover:shadow-lg cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ── Project Card ── */
interface ProjectCardProps {
  title:       string;
  category:    string;
  duration?:   string;
  imageAlt?:   string;
  imageSrc?:   string;
  featured?:   boolean;
  className?:  string;
  onClick?:    () => void;
}

export function ProjectCard({
  title,
  category,
  duration,
  imageAlt = "",
  imageSrc,
  featured = false,
  className,
  onClick,
}: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-surface border border-border",
        "cursor-pointer transition-all duration-slow ease",
        "hover:border-neutral-700 hover:shadow-lg",
        featured ? "col-span-2 row-span-2" : "col-span-1",
        className
      )}
    >
      {/* Image area */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-bg",
          featured ? "h-80" : "h-52"
        )}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-slow ease group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-elevated to-bg" />
        )}
      </div>

      {/* Meta */}
      <div className="p-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-body text-body-sm text-fg-muted mb-1">{category}</p>
          <h3 className="font-body text-heading-md font-medium text-fg group-hover:text-accent-300 transition-colors duration-base">
            {title}
          </h3>
        </div>
        {duration && (
          <span className="shrink-0 font-body text-label-sm text-fg-subtle uppercase tracking-widest mt-1">
            {duration}
          </span>
        )}
      </div>
    </article>
  );
}

/* ── Service Card ── */
interface ServiceCardProps {
  icon:        React.ReactNode;
  title:       string;
  description: string;
  className?:  string;
}

export function ServiceCard({ icon, title, description, className }: ServiceCardProps) {
  return (
    <Card variant="default" padding="lg" hoverable className={className}>
      <div className="w-10 h-10 rounded-lg bg-elevated flex items-center justify-center text-accent mb-5">
        {icon}
      </div>
      <h3 className="font-body text-heading-md font-medium text-fg mb-2">{title}</h3>
      <p className="font-body text-body-sm text-fg-muted leading-relaxed">{description}</p>
    </Card>
  );
}
