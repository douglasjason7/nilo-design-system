import { ReactNode } from "react";
import { cn } from "../utils/cn";

interface MediaCardProps {
  media:        ReactNode;              // <img>/<video> vem de fora
  mediaType?:   "image" | "video";      // video mostra overlay de play
  layout?:      "top" | "left";         // mídia no topo ou à esquerda
  title:        string;
  description?: string;
  eyebrow?:     string;
  action?:      ReactNode;              // CTA opcional
  className?:   string;
}

export function MediaCard({
  media,
  mediaType = "image",
  layout = "top",
  title,
  description,
  eyebrow,
  action,
  className,
}: MediaCardProps) {
  const isLeft = layout === "left";

  return (
    <div
      className={cn(
        "rounded-lg bg-elevated border border-border overflow-hidden",
        isLeft ? "flex items-stretch" : "flex flex-col",
        className
      )}
    >
      {/* Área de mídia */}
      <div
        className={cn(
          "relative bg-surface aspect-video overflow-hidden",
          isLeft ? "w-2/5 shrink-0" : "w-full"
        )}
      >
        {media}
        {mediaType === "video" && <PlayOverlay />}
      </div>

      {/* Corpo */}
      <div className="flex flex-col gap-2.5 p-5 flex-1 min-w-0 justify-center">
        {eyebrow && (
          <span className="inline-flex self-start rounded-full bg-accent-900 px-2.5 py-1 font-body text-label-sm text-accent-400 uppercase tracking-wide">
            {eyebrow}
          </span>
        )}
        <h3 className="font-body text-heading-md font-semibold text-fg">
          {title}
        </h3>
        {description && (
          <p className="font-body text-body-sm text-fg-muted leading-relaxed">
            {description}
          </p>
        )}
        {action && <div className="mt-1">{action}</div>}
      </div>
    </div>
  );
}

/* Overlay de play para mídia de vídeo — círculo com triângulo centralizado */
function PlayOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-neutral-950/60 backdrop-blur-sm">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-fg ml-0.5" fill="currentColor" aria-hidden="true">
          <path d="M6 4l14 8-14 8V4z" />
        </svg>
      </span>
    </div>
  );
}
