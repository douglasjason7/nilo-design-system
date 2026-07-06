import { KeyboardEvent, ReactNode, useState } from "react";
import { cn } from "../utils/cn";

type ArrowVariant = "solid" | "ghost";

interface CarouselProps {
  slides: ReactNode[];
  arrowVariant?: ArrowVariant;
  showDots?: boolean;
  showArrows?: boolean;
  loop?: boolean;
  className?: string;
  ariaLabel?: string;
}

const arrowStyles: Record<ArrowVariant, string> = {
  solid: "bg-elevated border border-border text-fg hover:bg-neutral-700",
  ghost: "bg-transparent text-fg hover:bg-elevated",
};

export function Carousel({
  slides,
  arrowVariant = "solid",
  showDots = true,
  showArrows = true,
  loop = false,
  className,
  ariaLabel,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const last = total - 1;

  const canPrev = loop || index > 0;
  const canNext = loop || index < last;

  const goPrev = () => setIndex((i) => (i === 0 ? (loop ? last : 0) : i - 1));
  const goNext = () => setIndex((i) => (i === last ? (loop ? 0 : last) : i + 1));

  // Navegação por teclado (setas ←/→).
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
  };

  return (
    <div
      role="region"
      aria-roledescription="carrossel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={cn("relative flex flex-col gap-4 outline-none", className)}
    >
      {/* Track + setas */}
      <div className="relative">
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-slow ease"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="shrink-0 w-full" aria-hidden={i !== index}>
                {slide}
              </div>
            ))}
          </div>
        </div>

        {showArrows && total > 1 && (
          <>
            <button
              type="button"
              aria-label="Slide anterior"
              onClick={goPrev}
              disabled={!canPrev}
              className={cn(
                "absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full",
                "flex items-center justify-center transition-colors duration-base",
                "disabled:opacity-40 disabled:cursor-not-allowed",
                arrowStyles[arrowVariant]
              )}
            >
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M10 3l-5 5 5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Próximo slide"
              onClick={goNext}
              disabled={!canNext}
              className={cn(
                "absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full",
                "flex items-center justify-center transition-colors duration-base",
                "disabled:opacity-40 disabled:cursor-not-allowed",
                arrowStyles[arrowVariant]
              )}
            >
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {showDots && total > 1 && (
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-base",
                i === index ? "w-4 bg-accent" : "w-2 bg-border hover:bg-neutral-600"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
