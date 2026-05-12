import { cn } from "../utils/cn";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
}

export function Pagination({ page, totalPages, onChange, siblingCount = 1, className }: PaginationProps) {
  const pages = buildRange(page, totalPages, siblingCount);
  return (
    <nav aria-label="Pagination" className={cn("inline-flex items-center gap-1", className)}>
      <PageButton aria-label="Previous page" disabled={page <= 1} onClick={() => onChange(page - 1)}>‹</PageButton>
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`g-${i}`} className="px-2 text-fg-subtle font-body text-body-sm">…</span>
        ) : (
          <PageButton key={p} active={p === page} onClick={() => onChange(p)}>{p}</PageButton>
        )
      )}
      <PageButton aria-label="Next page" disabled={page >= totalPages} onClick={() => onChange(page + 1)}>›</PageButton>
    </nav>
  );
}

function PageButton({
  active, disabled, children, onClick, ...rest
}: {
  active?: boolean; disabled?: boolean; children: React.ReactNode;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      aria-current={active ? "page" : undefined}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "min-w-8 h-8 px-2 rounded-md font-body text-body-sm",
        "transition-colors duration-base",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        active
          ? "bg-fg text-bg"
          : "text-fg-muted hover:text-fg hover:bg-elevated"
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

function buildRange(current: number, total: number, sibling: number): (number | "…")[] {
  const range: (number | "…")[] = [];
  const start = Math.max(1, current - sibling);
  const end   = Math.min(total, current + sibling);
  if (start > 1) {
    range.push(1);
    if (start > 2) range.push("…");
  }
  for (let i = start; i <= end; i++) range.push(i);
  if (end < total) {
    if (end < total - 1) range.push("…");
    range.push(total);
  }
  return range;
}
