import { Fragment, ReactNode } from "react";
import { cn } from "../utils/cn";

interface Crumb {
  label: ReactNode;
  href?: string;
}

interface BreadcrumbProps {
  items: Crumb[];
  separator?: ReactNode;
  className?: string;
}

export function Breadcrumb({ items, separator = "/", className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-2 font-body text-body-sm", className)}>
      <ol className="flex items-center gap-2 min-w-0">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <Fragment key={i}>
              <li className={cn("truncate", isLast ? "text-fg" : "text-fg-muted")}>
                {item.href && !isLast ? (
                  <a href={item.href} className="hover:text-fg transition-colors duration-base">
                    {item.label}
                  </a>
                ) : (
                  <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
                )}
              </li>
              {!isLast && <li aria-hidden className="text-fg-subtle">{separator}</li>}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
