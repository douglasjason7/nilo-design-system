import { cn } from "../utils/cn";

interface TestimonialCardProps {
  quote:       string;
  authorName:  string;
  authorRole:  string;
  authorCompany?: string;
  avatarSrc?:  string;
  avatarAlt?:  string;
  rating?:     number;
  className?:  string;
}

export function TestimonialCard({
  quote,
  authorName,
  authorRole,
  authorCompany,
  avatarSrc,
  avatarAlt = "",
  rating,
  className,
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "rounded-xl bg-surface border border-border p-6",
        "flex flex-col gap-5",
        className
      )}
    >
      {rating !== undefined && (
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              filled={i < rating}
              className="w-4 h-4"
            />
          ))}
        </div>
      )}

      <blockquote>
        <p className="font-body text-body-md text-fg-muted leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      <figcaption className="flex items-center gap-3 mt-auto">
        <Avatar src={avatarSrc} alt={avatarAlt} name={authorName} size="md" />
        <div>
          <p className="font-body text-body-sm font-medium text-fg">{authorName}</p>
          <p className="font-body text-label-lg text-fg-muted">
            {authorRole}
            {authorCompany && `, ${authorCompany}`}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

function StarIcon({ filled, className }: { filled: boolean; className?: string }) {
  return (
    <svg className={cn(filled ? "text-accent" : "text-fg-subtle", className)} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Avatar({
  src, alt, name, size,
}: {
  src?: string; alt: string; name: string; size: "sm" | "md" | "lg";
}) {
  const sizes = { sm: "w-7 h-7 text-label-sm", md: "w-9 h-9 text-body-sm", lg: "w-12 h-12 text-body-md" };

  if (src) {
    return <img src={src} alt={alt} className={cn("rounded-full object-cover shrink-0 bg-elevated", sizes[size])} />;
  }

  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className={cn("rounded-full bg-accent-subtle text-accent font-medium flex items-center justify-center shrink-0", sizes[size])}>
      {initials}
    </div>
  );
}
