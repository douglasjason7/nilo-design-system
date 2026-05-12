import { ReactNode, useState } from "react";
import { cn } from "../utils/cn";

interface Tab {
  id: string;
  label: ReactNode;
  badge?: ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  defaultId?: string;
  value?: string;
  onChange?: (id: string) => void;
  className?: string;
  children?: (activeId: string) => ReactNode;
}

export function Tabs({ tabs, defaultId, value, onChange, className, children }: TabsProps) {
  const [internal, setInternal] = useState(defaultId ?? tabs[0]?.id);
  const active = value ?? internal;

  const select = (id: string) => {
    if (value === undefined) setInternal(id);
    onChange?.(id);
  };

  return (
    <div className={className}>
      <div role="tablist" className="flex border-b border-border">
        {tabs.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${t.id}`}
              id={`tab-${t.id}`}
              disabled={t.disabled}
              onClick={() => select(t.id)}
              className={cn(
                "relative px-4 py-3 font-body font-medium text-body-sm transition-colors duration-base",
                "disabled:opacity-40 disabled:cursor-not-allowed",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 rounded-t-md",
                isActive
                  ? "text-fg after:absolute after:left-0 after:right-0 after:-bottom-px after:h-0.5 after:bg-accent"
                  : "text-fg-muted hover:text-fg"
              )}
            >
              <span className="inline-flex items-center gap-2">
                {t.label}
                {t.badge}
              </span>
            </button>
          );
        })}
      </div>
      {children && (
        <div role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`} className="pt-6">
          {children(active)}
        </div>
      )}
    </div>
  );
}
