import { cn } from "../utils/cn";
import { Divider } from "../atoms/Divider";

interface FooterLink {
  label: string;
  href:  string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterSectionProps {
  logo:       React.ReactNode;
  tagline?:   string;
  columns:    FooterColumn[];
  socials?:   Array<{ label: string; href: string; icon: React.ReactNode }>;
  legal?:     string;
  className?: string;
}

/* Total cols = 2 (brand) + columns.length — capped at sensible values */
const gridCols: Record<number, string> = {
  1: "lg:grid-cols-3",
  2: "lg:grid-cols-4",
  3: "lg:grid-cols-5",
  4: "lg:grid-cols-6",
};

export function FooterSection({
  logo, tagline, columns, socials, legal, className,
}: FooterSectionProps) {
  const colCount = Math.min(columns.length, 4);
  const lgGrid   = gridCols[colCount] ?? "lg:grid-cols-4";

  return (
    <footer
      className={cn(
        "border-t border-border-subtle bg-bg",
        "px-6 xl:px-20 pt-16 pb-8",
        className
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12">
        {/* Top row */}
        <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-8", lgGrid)}>
          {/* Brand column — always spans 2 cols */}
          <div className="col-span-2 flex flex-col gap-4">
            {logo}
            {tagline && (
              <p className="font-body text-body-sm text-fg-muted max-w-xs leading-relaxed">
                {tagline}
              </p>
            )}
            {socials && (
              <div className="flex gap-3 mt-2">
                {socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-fg-muted hover:text-fg hover:border-fg-subtle transition-all duration-base"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Link columns — each takes 1 col */}
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <p className="font-body text-label-lg font-medium text-fg uppercase tracking-widest">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-body-sm text-fg-muted hover:text-fg transition-colors duration-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="font-body text-caption text-fg-subtle">
            {legal ?? `© ${new Date().getFullYear()} All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
