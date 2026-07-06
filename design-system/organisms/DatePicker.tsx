import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";

/* ── Tipos públicos ── */
export interface DateRange {
  start?: Date;
  end?:   Date;
}

interface DatePickerBaseProps {
  placeholder?: string;
  disabled?:    boolean;
  minDate?:     Date;
  maxDate?:     Date;
  className?:   string;
  label?:       string;
}

interface DateModeProps extends DatePickerBaseProps {
  mode?:     "date";
  value?:    Date;
  onChange?: (d: Date) => void;
}

interface RangeModeProps extends DatePickerBaseProps {
  mode:      "range";
  value?:    DateRange;
  onChange?: (r: DateRange) => void;
}

export type DatePickerProps = DateModeProps | RangeModeProps;

/* ── Localização PT-BR ── */
const MESES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];
// Semana começando no domingo (padrão BR)
const DIAS_SEMANA = ["D", "S", "T", "Q", "Q", "S", "S"];

/* ── Helpers de data (sem Date no top-level) ── */
function fmt(d: Date): string {
  const dia = String(d.getDate()).padStart(2, "0");
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  return `${dia}/${mes}/${d.getFullYear()}`;
}

function sameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

// Zera hora para comparações de dia
function atMidnight(d: Date): number {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

// Matriz de 42 células (6 semanas × 7 dias), iniciando no domingo
function buildMatrix(year: number, month: number): Date[] {
  const first = new Date(year, month, 1);
  const startWeekday = first.getDay(); // 0 = domingo
  const cells: Date[] = [];
  for (let i = 0; i < 42; i++) {
    cells.push(new Date(year, month, 1 - startWeekday + i));
  }
  return cells;
}

function isRangeProps(p: DatePickerProps): p is RangeModeProps {
  return p.mode === "range";
}

/* ── Ícones inline ── */
function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function DatePicker(props: DatePickerProps) {
  const { placeholder = "Selecionar data", disabled, minDate, maxDate, className, label } = props;

  const [open, setOpen] = useState(false);
  // Mês em exibição — inicializado no valor atual ou no mês corrente (lazy, dentro do render)
  const [view, setView] = useState<Date>(() => {
    if (isRangeProps(props)) return props.value?.start ?? new Date();
    return props.value ?? new Date();
  });
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

  const isDisabledDay = (day: Date): boolean => {
    const t = atMidnight(day);
    if (minDate && t < atMidnight(minDate)) return true;
    if (maxDate && t > atMidnight(maxDate)) return true;
    return false;
  };

  const handleSelect = (day: Date) => {
    if (isDisabledDay(day)) return;
    if (isRangeProps(props)) {
      const cur = props.value ?? {};
      // Sem início, ou intervalo já completo → recomeça a seleção
      if (!cur.start || (cur.start && cur.end)) {
        props.onChange?.({ start: day, end: undefined });
        return;
      }
      // Já tem início, faltando fim → fecha o intervalo (ordena)
      if (atMidnight(day) < atMidnight(cur.start)) {
        props.onChange?.({ start: day, end: cur.start });
      } else {
        props.onChange?.({ start: cur.start, end: day });
      }
      setOpen(false);
    } else {
      props.onChange?.(day);
      setOpen(false);
    }
  };

  const handleClear = () => {
    if (isRangeProps(props)) props.onChange?.({ start: undefined, end: undefined });
    // Modo date não tem valor "vazio" via Date — só limpa o range
  };

  // Estado visual de uma célula
  const isSelectedEdge = (day: Date): boolean => {
    if (isRangeProps(props)) {
      const { start, end } = props.value ?? {};
      return (!!start && sameDay(day, start)) || (!!end && sameDay(day, end));
    }
    return !!props.value && sameDay(day, props.value);
  };

  const isInRange = (day: Date): boolean => {
    if (!isRangeProps(props)) return false;
    const { start, end } = props.value ?? {};
    if (!start || !end) return false;
    const t = atMidnight(day);
    return t > atMidnight(start) && t < atMidnight(end);
  };

  // Texto do campo
  const display = (() => {
    if (isRangeProps(props)) {
      const { start, end } = props.value ?? {};
      if (start && end) return `${fmt(start)} – ${fmt(end)}`;
      if (start) return `${fmt(start)} – …`;
      return "";
    }
    return props.value ? fmt(props.value) : "";
  })();

  const today = new Date();
  const cells = buildMatrix(view.getFullYear(), view.getMonth());
  const goPrev = () => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1));
  const goNext = () => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1));

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
          <CalendarIcon />
        </span>
        {display || placeholder}
      </button>

      {/* Popover — calendário */}
      {open && (
        <div
          role="dialog"
          aria-label="Calendário"
          className={cn(
            "absolute top-full left-0 mt-2 z-dropdown w-72",
            "rounded-lg bg-elevated border border-border shadow-lg p-4",
            "animate-scale-in origin-top"
          )}
        >
          {/* Cabeçalho: ‹ mês/ano › */}
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Mês anterior"
              className="w-8 h-8 rounded-md flex items-center justify-center text-fg-muted hover:bg-surface transition-colors duration-fast"
            >
              <ChevronLeft />
            </button>
            <span className="font-body text-body-sm font-medium text-fg">
              {MESES[view.getMonth()]} {view.getFullYear()}
            </span>
            <button
              type="button"
              onClick={goNext}
              aria-label="Próximo mês"
              className="w-8 h-8 rounded-md flex items-center justify-center text-fg-muted hover:bg-surface transition-colors duration-fast"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Dias da semana */}
          <div className="grid grid-cols-7 mb-1">
            {DIAS_SEMANA.map((d, i) => (
              <span key={i} className="w-9 h-6 flex items-center justify-center font-body text-label-sm text-fg-subtle">
                {d}
              </span>
            ))}
          </div>

          {/* Grade de dias */}
          <div className="grid grid-cols-7">
            {cells.map((day, i) => {
              const outside = day.getMonth() !== view.getMonth();
              const disabledDay = isDisabledDay(day);
              const selected = isSelectedEdge(day);
              const inRange = isInRange(day);
              const isToday = sameDay(day, today);
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSelect(day)}
                  className={cn(
                    "w-9 h-9 rounded-md font-body text-body-sm flex items-center justify-center",
                    "transition-colors duration-fast",
                    !selected && !inRange && "hover:bg-surface text-fg",
                    inRange && !selected && "bg-accent-subtle text-fg",
                    selected && "bg-accent text-white",
                    isToday && !selected && "ring-1 ring-accent",
                    outside && "text-fg-subtle opacity-50",
                    disabledDay && "opacity-30 pointer-events-none"
                  )}
                >
                  {day.getDate()}
                </button>
              );
            })}
          </div>

          {/* Rodapé: Limpar / Aplicar */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-border-subtle">
            <button
              type="button"
              onClick={handleClear}
              className="font-body text-body-sm text-fg-muted hover:text-fg transition-colors duration-fast"
            >
              Limpar
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-3 py-1.5 rounded-md bg-accent text-white font-body text-body-sm hover:bg-accent-hover transition-colors duration-fast"
            >
              Aplicar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
