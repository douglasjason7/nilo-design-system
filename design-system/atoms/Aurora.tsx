import { cn } from "../utils/cn";

interface AuroraProps {
  className?: string;
  /** Intensidade dos orbs de luz. */
  intensity?: "subtle" | "normal" | "strong";
}

const opacityByIntensity = { subtle: 0.5, normal: 0.75, strong: 1 } as const;

/**
 * Fundo de iluminação: dois orbs desfocados (royal + sun) atrás do conteúdo.
 * Use em heros/CTAs com posição relativa no pai. Não-interativo, fica atrás.
 */
export function Aurora({ className, intensity = "normal" }: AuroraProps) {
  const opacity = opacityByIntensity[intensity];
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ zIndex: -1 }}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: 560, height: 560, top: "-14%", left: "-8%",
          filter: "blur(90px)", opacity,
          background: "radial-gradient(circle, rgba(123,44,191,0.72) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 500, height: 500, bottom: "-18%", right: "-8%",
          filter: "blur(90px)", opacity,
          background: "radial-gradient(circle, rgba(242,100,25,0.55) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
