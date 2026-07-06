import { cn } from "../utils/cn";

interface NoiseOverlayProps {
  className?: string;
  /** Presença do grão (0–1). Default 0.12, como no teardown. */
  opacity?: number;
}

/* Grão via feTurbulence (sem asset externo). */
const NOISE_URL =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const FADE_MASK =
  "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 15%, rgba(0,0,0,0.98) 32%, #000 100%)";

/**
 * Camada de ruído/grão sobre uma seção. Absoluta e não-interativa;
 * adensa de cima para baixo via máscara de fade (como no cosmoq).
 */
export function NoiseOverlay({ className, opacity = 0.12 }: NoiseOverlayProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: NOISE_URL,
        backgroundSize: "128px 128px",
        backgroundRepeat: "repeat",
        opacity,
        WebkitMaskImage: FADE_MASK,
        maskImage: FADE_MASK,
      }}
    />
  );
}
