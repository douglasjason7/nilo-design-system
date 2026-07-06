import { ReactNode } from "react";
import { cn } from "../utils/cn";

// Item de ação do menu
interface MenuAction {
  id:           string;
  label:        ReactNode;
  icon?:        ReactNode;
  shortcut?:    string;
  destructive?: boolean;
  disabled?:    boolean;
  onSelect?:    () => void;
  separator?:   false;
}

// Divisor entre grupos de ações
interface MenuSeparator {
  id:        string;
  separator: true;
}

type MenuItem = MenuAction | MenuSeparator;

interface MenuProps {
  items:      MenuItem[];
  variant?:   "default" | "compact";
  className?: string;
}

export function Menu({ items, variant = "default", className }: MenuProps) {
  const compact = variant === "compact";

  return (
    <div
      role="menu"
      className={cn("rounded-lg bg-elevated border border-border shadow-lg p-1 min-w-52", className)}
    >
      {items.map((item) => {
        if ("separator" in item && item.separator) {
          return <div key={item.id} role="separator" className="my-1 h-px bg-border" />;
        }

        const action = item as MenuAction;
        return (
          <button
            key={action.id}
            type="button"
            role="menuitem"
            disabled={action.disabled}
            onClick={action.onSelect}
            className={cn(
              "flex items-center gap-2 w-full rounded-md text-left font-body text-body-sm px-3",
              compact ? "py-1.5" : "py-2",
              "transition-colors duration-base",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset",
              "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent",
              action.destructive
                ? "text-error-400 hover:bg-error-950"
                : "text-fg hover:bg-surface"
            )}
          >
            {action.icon && <span className="shrink-0 inline-flex w-4 h-4">{action.icon}</span>}
            <span className="flex-1 min-w-0 truncate">{action.label}</span>
            {action.shortcut && (
              <span className="shrink-0 text-fg-subtle text-label-sm tracking-wide">{action.shortcut}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export type { MenuItem };
