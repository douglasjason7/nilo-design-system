import { ReactNode } from "react";
import { cn } from "../utils/cn";

interface AppShellProps {
  sidebar: ReactNode;
  header?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function AppShell({ sidebar, header, children, className }: AppShellProps) {
  return (
    <div className={cn("flex min-h-screen bg-bg text-fg", className)}>
      {sidebar}
      <div className="flex flex-col flex-1 min-w-0">
        {header && <div className="sticky top-0 z-sticky">{header}</div>}
        <main className="flex-1 px-6 py-8 lg:px-10">{children}</main>
      </div>
    </div>
  );
}

interface AppHeaderProps {
  left?: ReactNode;
  right?: ReactNode;
  className?: string;
}

export function AppHeader({ left, right, className }: AppHeaderProps) {
  return (
    <header className={cn("flex items-center gap-4 px-6 lg:px-10 py-4 bg-bg/80 backdrop-blur-md border-b border-border", className)}>
      <div className="flex-1 min-w-0">{left}</div>
      <div className="shrink-0 flex items-center gap-3">{right}</div>
    </header>
  );
}
