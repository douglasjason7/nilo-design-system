import { ReactNode, useEffect, useRef } from "react";
import { cn } from "../utils/cn";
import { Button } from "../atoms/Button";

type DialogVariant = "default" | "destructive" | "success";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  variant?: DialogVariant;
  /** true = ícone padrão do variant; ou um ReactNode custom. */
  icon?: ReactNode | boolean;
  title: string;
  description?: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  loading?: boolean;
  className?: string;
}

/* Círculo do ícone (fundo 900 + traço claro) por variant. */
const iconWrap: Record<DialogVariant, string> = {
  default:     "bg-accent-900 text-accent-200",
  destructive: "bg-error-900 text-error-400",
  success:     "bg-success-900 text-success-400",
};

/* Botão de confirmar: base accent do Button + override de cor por variant. */
const confirmColor: Record<DialogVariant, string> = {
  default:     "",
  destructive: "bg-error-500 hover:bg-error-700 active:bg-error-800 text-neutral-50 shadow-none",
  success:     "bg-success-500 hover:bg-success-700 active:bg-success-800 text-neutral-50 shadow-none",
};

/* Ícones padrão por variant. */
const defaultIcons: Record<DialogVariant, ReactNode> = {
  default: (
    <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7.5 7.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.3" strokeLinecap="round" />
      <circle cx="10" cy="15" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  destructive: (
    <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M10 6v5" strokeLinecap="round" />
      <circle cx="10" cy="14" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5.5 10.5l3 3 6-6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function Dialog({
  open,
  onClose,
  variant = "default",
  icon,
  title,
  description,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  onConfirm,
  loading = false,
  className,
}: DialogProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Fecha no Escape.
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  // Resolve o ícone: true → padrão do variant; ReactNode → custom.
  const iconNode: ReactNode = icon === true ? defaultIcons[variant] : icon || null;

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-describedby={description ? "dialog-desc" : undefined}
      className="fixed inset-0 z-modal flex items-center justify-center p-4"
    >
      {/* Overlay — clique fora fecha. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-black/60 z-overlay animate-fade-in"
        onClick={onClose}
      />
      {/* Painel */}
      <div
        ref={panelRef}
        className={cn(
          "relative z-modal w-full max-w-md flex flex-col gap-6",
          "rounded-xl bg-elevated border border-border shadow-lg p-6",
          "animate-scale-in",
          className
        )}
      >
        <div className="flex items-start gap-4">
          {iconNode && (
            <span className={cn("shrink-0 w-10 h-10 rounded-full flex items-center justify-center", iconWrap[variant])}>
              {iconNode}
            </span>
          )}
          <div className="min-w-0 flex flex-col gap-1.5">
            <h2 id="dialog-title" className="font-display font-medium text-heading-md text-fg">
              {title}
            </h2>
            {description && (
              <p id="dialog-desc" className="font-body text-body-sm text-fg-muted">
                {description}
              </p>
            )}
          </div>
        </div>

        <footer className="flex items-center justify-end gap-3">
          <Button variant="ghost" size="sm" onClick={onClose} disabled={loading}>
            {cancelLabel}
          </Button>
          <Button
            variant="accent"
            size="sm"
            loading={loading}
            onClick={onConfirm}
            className={confirmColor[variant]}
          >
            {confirmLabel}
          </Button>
        </footer>
      </div>
    </div>
  );
}
