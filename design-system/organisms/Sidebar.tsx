import { ReactNode } from "react";
import { cn } from "../utils/cn";

interface NavItem {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  href?: string;
  badge?: ReactNode;
  disabled?: boolean;
}

interface SidebarProps {
  items: NavItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function Sidebar({ items, activeId, onSelect, header, footer, className }: SidebarProps) {
  return (
    <aside className={cn("flex flex-col h-full w-60 bg-surface border-r border-border", className)}>
      {header && <div className="px-4 py-5 border-b border-border">{header}</div>}
      <nav className="flex-1 overflow-y-auto p-3">
        <ul className="flex flex-col gap-1">
          {items.map((item) => (
            <li key={item.id}>
              <SidebarItem item={item} active={item.id === activeId} onSelect={onSelect} />
            </li>
          ))}
        </ul>
      </nav>
      {footer && <div className="border-t border-border p-3">{footer}</div>}
    </aside>
  );
}

function SidebarItem({ item, active, onSelect }: { item: NavItem; active?: boolean; onSelect?: (id: string) => void }) {
  const className = cn(
    "flex items-center gap-3 w-full px-3 py-2 rounded-lg font-body font-medium text-body-sm",
    "transition-colors duration-base",
    "disabled:opacity-40 disabled:cursor-not-allowed",
    active
      ? "bg-accent-subtle text-fg"
      : "text-fg-muted hover:text-fg hover:bg-elevated"
  );
  const content = (
    <>
      {item.icon && <span className={cn("shrink-0 w-4 h-4", active ? "text-accent" : "")}>{item.icon}</span>}
      <span className="flex-1 truncate text-left">{item.label}</span>
      {item.badge}
    </>
  );

  if (item.href) {
    return (
      <a href={item.href} aria-current={active ? "page" : undefined} className={className}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" disabled={item.disabled} onClick={() => onSelect?.(item.id)} aria-current={active ? "page" : undefined} className={className}>
      {content}
    </button>
  );
}
