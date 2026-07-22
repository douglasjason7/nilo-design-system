"use client";

import { ReactNode, useEffect, useRef } from "react";
import { cn } from "../utils/cn";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  size?: "sm" | "md" | "lg";
  destructive?: boolean;
  className?: string;
}

const sizes = { sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg" } as const;

export function Modal({ open, onClose, title, description, children, footer, size = "md", destructive, className }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
      aria-describedby={description ? "modal-desc" : undefined}
      className="fixed inset-0 z-modal flex items-center justify-center p-4"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        className={cn(
          "relative w-full rounded-xl bg-elevated border border-border shadow-lg",
          "animate-scale-in",
          sizes[size],
          className
        )}
      >
        <header className="flex items-start justify-between gap-4 px-6 pt-5 pb-4 border-b border-border">
          <div className="min-w-0">
            {title && (
              <h2 id="modal-title" className={cn("font-display font-medium text-heading-md", destructive ? "text-error-400" : "text-fg")}>
                {title}
              </h2>
            )}
            {description && <p id="modal-desc" className="font-body text-body-sm text-fg-muted mt-1">{description}</p>}
          </div>
          <button onClick={onClose} aria-label="Close" className="shrink-0 -mr-1 -mt-0.5 p-1 rounded-md text-fg-muted hover:text-fg hover:bg-elevated transition-colors duration-base">
            <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
            </svg>
          </button>
        </header>
        {children && <div className="px-6 py-5 font-body text-body-sm text-fg-muted">{children}</div>}
        {footer && <footer className="flex items-center justify-end gap-2 px-6 py-4 border-t border-border">{footer}</footer>}
      </div>
    </div>
  );
}
