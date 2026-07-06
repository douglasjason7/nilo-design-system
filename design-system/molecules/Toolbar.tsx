import { ReactNode } from "react";
import { cn } from "../utils/cn";

type Orientation = "horizontal" | "vertical";
type Density     = "compact" | "comfortable";

interface ToolbarProps {
  orientation?:  Orientation;
  density?:      Density;
  children:      ReactNode;
  "aria-label"?: string;
  className?:    string;
}

const densities: Record<Density, string> = {
  compact:     "gap-1 p-1",
  comfortable: "gap-2 p-1.5",
};

export function Toolbar({
  orientation = "horizontal",
  density = "compact",
  children,
  "aria-label": ariaLabel,
  className,
}: ToolbarProps) {
  const isVertical = orientation === "vertical";
  return (
    <div
      role="toolbar"
      aria-orientation={orientation}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center rounded-lg bg-elevated border border-border",
        isVertical && "flex-col",
        densities[density],
        className
      )}
    >
      {children}
    </div>
  );
}

interface ToolbarDividerProps {
  orientation?: Orientation;
  className?:   string;
}

/* Separador — respeita a orientação da toolbar (vertical = linha horizontal) */
export function ToolbarDivider({ orientation = "horizontal", className }: ToolbarDividerProps) {
  const isVertical = orientation === "vertical";
  return (
    <span
      role="separator"
      aria-orientation={isVertical ? "horizontal" : "vertical"}
      className={cn(
        "shrink-0 bg-border",
        isVertical ? "h-px w-5 my-1" : "w-px h-5 mx-1",
        className
      )}
    />
  );
}
