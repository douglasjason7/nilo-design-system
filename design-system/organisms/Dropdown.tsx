import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";

interface DropdownItem {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  destructive?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
}

interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  align?: "start" | "end";
  className?: string;
}

export function Dropdown({ trigger, items, align = "start", className }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative inline-flex", className)}>
      <button type="button" onClick={() => setOpen(!open)} aria-haspopup="menu" aria-expanded={open} className="contents">
        {trigger}
      </button>
      {open && (
        <div
          role="menu"
          className={cn(
            "absolute top-full mt-2 z-dropdown min-w-48 rounded-lg bg-elevated border border-border shadow-lg p-1",
            "animate-scale-in origin-top",
            align === "end" ? "right-0" : "left-0"
          )}
        >
          {items.map((item) => (
            <button
              key={item.id}
              role="menuitem"
              disabled={item.disabled}
              onClick={() => { item.onSelect?.(); setOpen(false); }}
              className={cn(
                "flex items-center gap-2 w-full px-3 py-2 rounded-md font-body text-body-sm text-left",
                "transition-colors duration-base",
                "disabled:opacity-40 disabled:cursor-not-allowed",
                item.destructive
                  ? "text-error-400 hover:bg-error-950"
                  : "text-fg hover:bg-surface"
              )}
            >
              {item.icon && <span className="shrink-0 w-4 h-4">{item.icon}</span>}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
