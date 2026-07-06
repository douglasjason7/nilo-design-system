import { HTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  /** Vidro mais presente (bg 10% em vez de 7%). */
  strong?: boolean;
  /** Realça o vidro no hover. */
  hover?: boolean;
}

/**
 * Superfície de vidro fosco (frosted glass) — aro royal + brilho interno.
 * Precisa de algo atrás (imagem/gradiente/Aurora) para o blur desfocar.
 * Receita destilada do teardown do cosmoq, remapeada para a cromática Kemet.
 */
export function GlassPanel({ strong = false, hover = false, className, children, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[rgba(184,132,255,0.16)] shadow-glass backdrop-blur-glass",
        strong ? "bg-white/[0.10]" : "bg-white/[0.07]",
        hover && "transition-all duration-base ease hover:bg-white/[0.10] hover:border-[rgba(184,132,255,0.28)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
