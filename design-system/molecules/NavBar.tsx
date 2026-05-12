"use client";
import { useState } from "react";
import { cn } from "../utils/cn";
import { Button } from "../atoms/Button";

interface NavItem {
  label: string;
  href:  string;
}

interface NavBarProps {
  logo:    React.ReactNode;
  items:   NavItem[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  className?:  string;
}

export function NavBar({ logo, items, ctaLabel = "Start project", onCtaClick, className }: NavBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[200]",
        "border-b border-border-subtle",
        "bg-bg/80 backdrop-blur-xl",
        className
      )}
    >
      <div className="max-w-container mx-auto px-6 xl:px-20 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <div className="shrink-0">{logo}</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "h-9 px-4 rounded-full inline-flex items-center",
                "font-body text-body-sm text-fg-muted",
                "hover:text-fg hover:bg-elevated",
                "transition-all duration-base ease"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="primary" size="sm" onClick={onCtaClick}>
            {ctaLabel}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-elevated transition-colors"
        >
          <span className={cn("block w-5 h-0.5 bg-fg transition-all duration-base", open && "rotate-45 translate-y-2")} />
          <span className={cn("block w-5 h-0.5 bg-fg transition-all duration-base", open && "opacity-0")} />
          <span className={cn("block w-5 h-0.5 bg-fg transition-all duration-base", open && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border-subtle bg-bg px-6 py-4 flex flex-col gap-1">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="h-11 px-3 flex items-center font-body text-body-md text-fg-muted hover:text-fg rounded-lg hover:bg-elevated transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-border mt-2">
            <Button variant="primary" size="md" className="w-full" onClick={onCtaClick}>
              {ctaLabel}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
