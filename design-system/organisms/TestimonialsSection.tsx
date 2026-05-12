"use client";
import { useState } from "react";
import { cn } from "../utils/cn";
import { TestimonialCard } from "../molecules/TestimonialCard";
import { Label } from "../atoms/Typography";

interface Testimonial {
  quote:       string;
  authorName:  string;
  authorRole:  string;
  authorCompany?: string;
  avatarSrc?:  string;
  rating?:     number;
}

interface TestimonialsSectionProps {
  eyebrow?:      string;
  headline:      string;
  testimonials:  Testimonial[];
  layout?:       "grid" | "carousel";
  className?:    string;
}

export function TestimonialsSection({
  eyebrow,
  headline,
  testimonials,
  layout = "grid",
  className,
}: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={cn("py-24 px-6 xl:px-20 max-w-container mx-auto w-full", className)}>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3 max-w-lg">
          {eyebrow && <Label uppercase muted>{eyebrow}</Label>}
          <h2 className="font-display text-display-lg text-fg tracking-tight text-balance">
            {headline}
          </h2>
        </div>

        {layout === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <TestimonialCard
              {...testimonials[activeIndex]}
              className="max-w-2xl"
            />
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "h-1 rounded-full transition-all duration-base ease",
                    i === activeIndex
                      ? "w-8 bg-accent"
                      : "w-4 bg-neutral-700 hover:bg-neutral-500"
                  )}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
