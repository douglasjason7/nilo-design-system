import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";

export interface TimePickerProps {
  value?:       string;              // formato "HH:mm"
  onChange?:    (t: string) => void;
  minuteStep?:  number;              // default 5
  use24h?:      boolean;             // default true (formato BR)
  placeholder?: string;
  disabled?:    boolean;
  className?:   string;
  label?:       string;
}

/* ── Ícone inline ── */
function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

// Parse "HH:mm" → { h, m } ou null
function parse(value?: string): { h: number; m: number } | null {
  if (!value) return null;
  const match = /^(\d{1,2}):(\d{1,2})$/.exec(value);
  if (!match) return null;
  const h = Number(match[1]);
  const m = Number(match[2]);
  if (h < 0 || h > 23 || m < 0 || m > 59) return null;
  return { h, m };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function TimePicker({
  value,
  onChange,
  minuteStep = 5,
  use24h = true,
  placeholder = "Selecionar hora",
  disabled,
  className,
  label,
}: TimePickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const labelId = label ? `${label.toLowerCase().replace(/\s+/g, "-")}-label` : undefined;

  // Fecha no Escape / clique fora (padrão do Dropdown)
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = parse(value);

  // Opções de horas: 24h → 0..23; 12h → 1..12
  const hourList = use24h
    ? Array.from({ length: 24 }, (_, i) => i)
    : Array.from({ length: 12 }, (_, i) => i + 1);

  // Opções de minutos conforme o passo
  const step = minuteStep > 0 ? minuteStep : 1;
  const minuteList = Array.from({ length: Math.ceil(60 / step) }, (_, i) => i * step).filter((m) => m < 60);

  // Hora exibida na coluna (12h mostra 1..12; interno mantém 0..23)
  const displayHour = (h: number): number => {
    if (use24h) return h;
    const mod = h % 12;
    return mod === 0 ? 12 : mod;
  };
  const isHourSelected = (h: number): boolean => {
    if (!current) return false;
    return displayHour(current.h) === h;
  };
  const isMinuteSelected = (m: number): boolean => !!current && current.m === m;

  // Aplica seleção mantendo a outra coluna (default 00 quando ainda não há valor)
  const selectHour = (h: number) => {
    const m = current?.m ?? 0;
    // Em 12h, preserva AM/PM do valor atual (default AM)
    const h24 = use24h ? h : (current && current.h >= 12 ? (h % 12) + 12 : h % 12);
    onChange?.(`${pad(h24)}:${pad(m)}`);
  };
  const selectMinute = (m: number) => {
    const h = current?.h ?? 0;
    onChange?.(`${pad(h)}:${pad(m)}`);
  };

  // Sufixo AM/PM no campo quando 12h
  const display = (() => {
    if (!current) return "";
    if (use24h) return `${pad(current.h)}:${pad(current.m)}`;
    const suffix = current.h >= 12 ? "PM" : "AM";
    return `${pad(displayHour(current.h))}:${pad(current.m)} ${suffix}`;
  })();

  return (
    <div ref={ref} className={cn("relative flex flex-col gap-1.5", className)}>
      {label && (
        <span id={labelId} className="font-body text-label-lg font-medium text-fg">
          {label}
        </span>
      )}

      {/* Trigger estilo Input */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-labelledby={labelId}
        className={cn(
          "relative w-full h-11 rounded-lg bg-bg border border-border pl-10 pr-4",
          "flex items-center font-body text-body-md text-left",
          "transition-all duration-base outline-none",
          "focus:border-accent focus:ring-2 focus:ring-accent/20",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          display ? "text-fg" : "text-fg-subtle"
        )}
      >
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-fg-muted pointer-events-none">
          <ClockIcon />
        </span>
        {display || placeholder}
      </button>

      {/* Popover — colunas roláveis */}
      {open && (
        <div
          role="dialog"
          aria-label="Selecionar hora"
          className={cn(
            "absolute top-full left-0 mt-2 z-dropdown w-48",
            "rounded-lg bg-elevated border border-border shadow-lg p-2",
            "animate-scale-in origin-top"
          )}
        >
          {/* Cabeçalho das colunas */}
          <div className="grid grid-cols-2 gap-2 px-1 pb-1">
            <span className="font-body text-label-sm text-fg-subtle uppercase tracking-wider text-center">Horas</span>
            <span className="font-body text-label-sm text-fg-subtle uppercase tracking-wider text-center">Min</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* Coluna de horas */}
            <div className="max-h-56 overflow-y-auto flex flex-col gap-0.5 pr-1">
              {hourList.map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => selectHour(h)}
                  className={cn(
                    "px-3 py-1.5 rounded-md font-body text-body-sm text-center transition-colors duration-fast",
                    isHourSelected(h) ? "bg-accent text-white" : "text-fg hover:bg-surface"
                  )}
                >
                  {pad(h)}
                </button>
              ))}
            </div>

            {/* Coluna de minutos */}
            <div className="max-h-56 overflow-y-auto flex flex-col gap-0.5 pr-1">
              {minuteList.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => selectMinute(m)}
                  className={cn(
                    "px-3 py-1.5 rounded-md font-body text-body-sm text-center transition-colors duration-fast",
                    isMinuteSelected(m) ? "bg-accent text-white" : "text-fg hover:bg-surface"
                  )}
                >
                  {pad(m)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
