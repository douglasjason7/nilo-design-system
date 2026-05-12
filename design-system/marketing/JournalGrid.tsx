import { cn } from "../utils/cn";
import { Badge } from "../atoms/Badge";
import { Label } from "../atoms/Typography";
import { Button } from "../atoms/Button";

interface Article {
  slug:        string;
  title:       string;
  excerpt:     string;
  category:    string;
  publishedAt: string;
  readTime?:   string;
  imageSrc?:   string;
  imageAlt?:   string;
  featured?:   boolean;
}

interface JournalGridProps {
  eyebrow?:   string;
  headline:   string;
  articles:   Article[];
  ctaLabel?:  string;
  onCtaClick?: () => void;
  className?: string;
}

export function JournalGrid({
  eyebrow, headline, articles, ctaLabel, onCtaClick, className,
}: JournalGridProps) {
  return (
    <section className={cn("py-24 px-6 xl:px-20 max-w-container mx-auto w-full", className)}>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            {eyebrow && <Label uppercase muted>{eyebrow}</Label>}
            <h2 className="font-display text-display-lg text-fg tracking-tight">{headline}</h2>
          </div>
          {ctaLabel && (
            <Button variant="outline" size="md" onClick={onCtaClick}>{ctaLabel}</Button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ title, excerpt, category, publishedAt, readTime, imageSrc, imageAlt = "", featured }: Article) {
  return (
    <article className={cn(
      "group flex flex-col rounded-xl overflow-hidden bg-surface border border-border",
      "hover:border-border transition-all duration-base cursor-pointer",
      featured && "sm:col-span-2"
    )}>
      {imageSrc && (
        <div className="h-48 overflow-hidden bg-bg">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2">
          <Badge variant="default" size="sm">{category}</Badge>
          {readTime && (
            <span className="font-body text-caption text-fg-subtle">{readTime}</span>
          )}
        </div>
        <h3 className="font-body text-heading-md font-medium text-fg group-hover:text-accent-300 transition-colors duration-base text-balance">
          {title}
        </h3>
        <p className="font-body text-body-sm text-fg-muted leading-relaxed line-clamp-3">{excerpt}</p>
        <div className="mt-auto pt-4 border-t border-border">
          <span className="font-body text-caption text-fg-subtle">{publishedAt}</span>
        </div>
      </div>
    </article>
  );
}
