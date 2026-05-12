"use client";
import { useState } from "react";
import { cn } from "../utils/cn";
import { ProjectCard } from "../molecules/Card";
import { Button } from "../atoms/Button";
import { Label } from "../atoms/Typography";
import { Tag } from "../atoms/Tag";

interface Project {
  id:        string;
  title:     string;
  category:  string;
  duration?: string;
  imageSrc?: string;
  imageAlt?: string;
  featured?: boolean;
}

interface WorksGridProps {
  eyebrow?:   string;
  headline:   string;
  projects:   Project[];
  categories?: string[];
  ctaLabel?:  string;
  onCtaClick?: () => void;
  className?:  string;
}

export function WorksGrid({
  eyebrow,
  headline,
  projects,
  categories = [],
  ctaLabel,
  onCtaClick,
  className,
}: WorksGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const allCategories = ["All", ...categories];

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className={cn("py-24 px-6 xl:px-20 max-w-container mx-auto w-full", className)}>
      <div className="flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            {eyebrow && <Label uppercase muted>{eyebrow}</Label>}
            <h2 className="font-display text-display-lg text-fg tracking-tight">
              {headline}
            </h2>
          </div>
          {ctaLabel && (
            <Button variant="outline" size="md" onClick={onCtaClick}>
              {ctaLabel}
            </Button>
          )}
        </div>

        {/* Category filter */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <Tag
                key={cat}
                interactive
                active={cat === activeCategory}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Tag>
            ))}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              duration={project.duration}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
