import { cn } from "../utils/cn";
import { AccordionFaq } from "../molecules/AccordionFaq";
import { Label } from "../atoms/Typography";

interface FaqSectionProps {
  eyebrow?:   string;
  headline:   string;
  items:      Array<{ question: string; answer: string }>;
  layout?:    "centered" | "split";
  className?: string;
}

export function FaqSection({ eyebrow, headline, items, layout = "centered", className }: FaqSectionProps) {
  if (layout === "split") {
    return (
      <section className={cn("py-24 px-6 xl:px-20 max-w-container mx-auto w-full", className)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-4 lg:sticky lg:top-32 h-fit">
            {eyebrow && <Label uppercase muted>{eyebrow}</Label>}
            <h2 className="font-display text-display-lg text-fg tracking-tight text-balance">
              {headline}
            </h2>
          </div>
          <AccordionFaq items={items} />
        </div>
      </section>
    );
  }

  return (
    <section className={cn("py-24 px-6 xl:px-20 max-w-container mx-auto w-full", className)}>
      <div className="flex flex-col gap-12 max-w-2xl mx-auto">
        <div className="flex flex-col items-center text-center gap-3">
          {eyebrow && <Label uppercase muted>{eyebrow}</Label>}
          <h2 className="font-display text-display-lg text-fg tracking-tight text-balance">
            {headline}
          </h2>
        </div>
        <AccordionFaq items={items} />
      </div>
    </section>
  );
}
