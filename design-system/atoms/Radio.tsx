import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, id, disabled, ...props }, ref) => {
    const inputId = id ?? (label ? `rd-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
    return (
      <label htmlFor={inputId} className={cn("inline-flex items-center gap-2 cursor-pointer select-none", disabled && "opacity-40 cursor-not-allowed", className)}>
        <span className="relative inline-flex items-center justify-center">
          <input
            ref={ref}
            id={inputId}
            type="radio"
            disabled={disabled}
            className={cn(
              "peer appearance-none w-4 h-4 rounded-full border border-border bg-bg",
              "transition-colors duration-base",
              "checked:border-accent",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            )}
            {...props}
          />
          <span className="pointer-events-none absolute w-2 h-2 rounded-full bg-accent opacity-0 peer-checked:opacity-100 transition-opacity duration-base" />
        </span>
        {label && <span className="font-body text-body-sm text-fg">{label}</span>}
      </label>
    );
  }
);
Radio.displayName = "Radio";

interface RadioGroupProps {
  name: string;
  value?: string;
  onChange?: (v: string) => void;
  options: { value: string; label: string }[];
  orientation?: "vertical" | "horizontal";
  className?: string;
}

export function RadioGroup({ name, value, onChange, options, orientation = "vertical", className }: RadioGroupProps) {
  return (
    <div role="radiogroup" className={cn("flex gap-3", orientation === "vertical" ? "flex-col" : "flex-row flex-wrap", className)}>
      {options.map((o) => (
        <Radio
          key={o.value}
          name={name}
          value={o.value}
          label={o.label}
          checked={value === o.value}
          onChange={() => onChange?.(o.value)}
        />
      ))}
    </div>
  );
}
