import { ReactNode } from "react";
import { cn } from "../utils/cn";

interface Step {
  id: string;
  label: ReactNode;
  description?: ReactNode;
}

interface StepperProps {
  steps: Step[];
  current: number;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Stepper({ steps, current, orientation = "horizontal", className }: StepperProps) {
  const isHorizontal = orientation === "horizontal";

  return (
    <ol className={cn("flex", isHorizontal ? "flex-row items-start" : "flex-col gap-4", className)}>
      {steps.map((step, i) => {
        const status: "complete" | "current" | "upcoming" =
          i < current ? "complete" : i === current ? "current" : "upcoming";
        const isLast = i === steps.length - 1;

        return (
          <li key={step.id} className={cn("flex", isHorizontal ? "flex-row items-start flex-1" : "flex-row gap-3", isHorizontal && !isLast && "min-w-0")}>
            <div className="flex flex-col items-center">
              <Bullet status={status} index={i} />
              {!isLast && !isHorizontal && (
                <span className={cn("flex-1 w-px mt-1 mb-1", status === "complete" ? "bg-accent" : "bg-border")} aria-hidden />
              )}
            </div>
            <div className={cn(isHorizontal ? "ml-3 -mt-0.5" : "")}>
              <p className={cn(
                "font-body font-medium text-body-sm",
                status === "current" ? "text-fg" : status === "complete" ? "text-fg" : "text-fg-muted"
              )}>
                {step.label}
              </p>
              {step.description && (
                <p className="font-body text-caption text-fg-muted">{step.description}</p>
              )}
            </div>
            {isHorizontal && !isLast && (
              <span className={cn("flex-1 h-px mt-3.5 mx-3", status === "complete" ? "bg-accent" : "bg-border")} aria-hidden />
            )}
          </li>
        );
      })}
    </ol>
  );
}

function Bullet({ status, index }: { status: "complete" | "current" | "upcoming"; index: number }) {
  const base = "w-7 h-7 rounded-full inline-flex items-center justify-center font-body font-semibold text-label-sm transition-colors duration-base";
  if (status === "complete") {
    return (
      <span className={cn(base, "bg-accent text-bg")}>
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M3 8.5L6.5 12L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (status === "current") {
    return <span className={cn(base, "bg-bg ring-2 ring-accent text-fg")}>{index + 1}</span>;
  }
  return <span className={cn(base, "bg-elevated text-fg-muted border border-border")}>{index + 1}</span>;
}
