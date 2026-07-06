"use client";
import { ReactNode, useId, useState } from "react";
import { cn } from "../utils/cn";

interface FaqItem {
  question: ReactNode;
  answer:   ReactNode;
}

interface AccordionFaqProps {
  items:      FaqItem[];
  className?: string;
  /** Índice aberto na renderização inicial (null = todos fechados). */
  defaultOpen?: number | null;
  /** Substitui o ícone padrão (plus → rotate-45) por render custom. */
  renderIcon?: (isOpen: boolean) => ReactNode;
  /** Overrides de classe por parte (mesclados via tailwind-merge). */
  itemClassName?:    string;
  triggerClassName?: string;
  panelClassName?:   string;
  answerClassName?:  string;
}

export function AccordionFaq({
  items,
  className,
  defaultOpen = null,
  renderIcon,
  itemClassName,
  triggerClassName,
  panelClassName,
  answerClassName,
}: AccordionFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  // Prefixo estável SSR/cliente — permite mais de um AccordionFaq por página
  // sem colisão de ids (a11y do aria-controls/labelledby).
  const uid = useId();

  return (
    <div className={cn("flex flex-col divide-y divide-border", className)}>
      {items.map((item, i) => {
        const isOpen   = openIndex === i;
        const panelId  = `${uid}-faq-panel-${i}`;
        const buttonId = `${uid}-faq-btn-${i}`;

        return (
          <div key={i} className={cn("py-5", itemClassName)}>
            <button
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className={cn(
                "w-full flex items-center justify-between gap-4 text-left",
                "font-body text-body-md font-medium text-fg",
                "hover:text-accent-300 transition-colors duration-base",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm",
                triggerClassName
              )}
            >
              <span>{item.question}</span>
              {renderIcon ? (
                renderIcon(isOpen)
              ) : (
                <span
                  aria-hidden="true"
                  className={cn(
                    "shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center",
                    "text-fg-muted transition-transform duration-base ease",
                    isOpen && "rotate-45 border-accent text-accent"
                  )}
                >
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              )}
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "overflow-hidden transition-all duration-slow ease",
                isOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0 pointer-events-none",
                panelClassName
              )}
            >
              <p className={cn("font-body text-body-sm text-fg-muted leading-relaxed pr-10", answerClassName)}>
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
