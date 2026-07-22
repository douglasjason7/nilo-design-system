"use client";

import { HTMLAttributes, useEffect, useRef, useState } from "react";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  /** Atraso da entrada em ms — use com índice para stagger. */
  delay?: number;
  /** Curva/duração de hero (1.2s, easeOutExpo) em vez do padrão (0.6s). */
  hero?: boolean;
  /** Anima só uma vez ao entrar (default). Se false, refaz ao sair/entrar. */
  once?: boolean;
}

/**
 * Entrada blur-reveal (fade + rise + desfoque→nítido) disparada no scroll
 * via IntersectionObserver. Assinatura de movimento do teardown cosmoq,
 * adaptada para on-scroll (mais útil numa lib que o on-load do Framer).
 * Respeita prefers-reduced-motion.
 */
export function Reveal({ delay = 0, hero = false, once = true, className, children, style, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const duration = hero ? 1200 : 600;
  const easing = hero ? "cubic-bezier(0.16,1,0.3,1)" : "cubic-bezier(0.12,0.23,0.5,1)";
  const transition = `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms, filter ${duration}ms ${easing} ${delay}ms`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition,
        opacity: shown ? 1 : 0.001,
        transform: shown ? "none" : "translateY(24px)",
        filter: shown ? "blur(0)" : "blur(10px)",
        willChange: "opacity, transform, filter",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
