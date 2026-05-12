"use client";
import { useState } from "react";
import { cn } from "../utils/cn";

interface FaqItem {
  question: string;
  answer:   string;
}

interface AccordionFaqProps {
  items:      FaqItem[];
  className?: string;
}

export function AccordionFaq({ items, className }: AccordionFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex flex-col divide-y divide-border", className)}>
      {items.map((item, i) => {
        const isOpen   = openIndex === i;
        const panelId  = `faq-panel-${i}`;
        const buttonId = `faq-btn-${i}`;

        return (
          <div key={i} className="py-5">
            <button
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className={cn(
                "w-full flex items-center justify-between gap-4 text-left",
                "font-body text-body-md font-medium text-fg",
                "hover:text-accent-300 transition-colors duration-base",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              )}
            >
              <span>{item.question}</span>
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
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "overflow-hidden transition-all duration-slow ease",
                isOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0 pointer-events-none"
              )}
            >
              <p className="font-body text-body-sm text-fg-muted leading-relaxed pr-10">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
