import { ReactNode, useState } from "react";
import { cn } from "../utils/cn";

type Placement = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  content: ReactNode;
  placement?: Placement;
  children: ReactNode;
  delay?: number;
}

const placementStyles: Record<Placement, { wrap: string; arrow: string }> = {
  top:    { wrap: "bottom-full left-1/2 -translate-x-1/2 mb-2", arrow: "top-full left-1/2 -translate-x-1/2 -mt-px border-l-transparent border-r-transparent border-b-transparent border-t-elevated" },
  bottom: { wrap: "top-full left-1/2 -translate-x-1/2 mt-2",    arrow: "bottom-full left-1/2 -translate-x-1/2 -mb-px border-l-transparent border-r-transparent border-t-transparent border-b-elevated" },
  left:   { wrap: "right-full top-1/2 -translate-y-1/2 mr-2",   arrow: "left-full top-1/2 -translate-y-1/2 -ml-px border-t-transparent border-b-transparent border-r-transparent border-l-elevated" },
  right:  { wrap: "left-full top-1/2 -translate-y-1/2 ml-2",    arrow: "right-full top-1/2 -translate-y-1/2 -mr-px border-t-transparent border-b-transparent border-l-transparent border-r-elevated" },
};

export function Tooltip({ content, placement = "top", children, delay = 100 }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (timer) clearTimeout(timer);
    setTimer(setTimeout(() => setOpen(true), delay));
  };
  const hide = () => {
    if (timer) clearTimeout(timer);
    setOpen(false);
  };

  return (
    <span className="relative inline-flex" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      {open && (
        <span role="tooltip" className={cn("absolute z-dropdown pointer-events-none animate-fade-in", placementStyles[placement].wrap)}>
          <span className="block whitespace-nowrap rounded-md bg-elevated px-2 py-1 text-caption text-fg shadow-md">
            {content}
          </span>
          <span aria-hidden className={cn("absolute w-0 h-0 border-4", placementStyles[placement].arrow)} />
        </span>
      )}
    </span>
  );
}
