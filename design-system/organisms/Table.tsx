import { ReactNode } from "react";
import { cn } from "../utils/cn";

export interface Column<T> {
  id: string;
  header: ReactNode;
  align?: "left" | "right" | "center";
  width?: string;
  cell: (row: T, rowIndex: number) => ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  zebra?: boolean;
  rowKey?: (row: T, i: number) => string | number;
  onRowClick?: (row: T) => void;
  empty?: ReactNode;
  className?: string;
}

export function Table<T>({ columns, data, zebra = true, rowKey, onRowClick, empty, className }: TableProps<T>) {
  return (
    <div className={cn("rounded-xl border border-border bg-surface overflow-hidden", className)}>
      <table className="w-full font-body text-body-sm">
        <thead>
          <tr className="border-b border-border">
            {columns.map((col) => (
              <th
                key={col.id}
                style={{ width: col.width }}
                className={cn(
                  "px-4 py-3 font-medium text-fg-muted text-caption uppercase tracking-wide",
                  col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-12 text-center text-fg-muted">
                {empty ?? "No results"}
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr
                key={rowKey ? rowKey(row, i) : i}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
                className={cn(
                  "border-b border-border-subtle last:border-0 transition-colors duration-base",
                  zebra && i % 2 === 1 && "bg-bg/40",
                  onRowClick && "cursor-pointer hover:bg-elevated"
                )}
              >
                {columns.map((col) => (
                  <td
                    key={col.id}
                    className={cn(
                      "px-4 py-3 text-fg",
                      col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"
                    )}
                  >
                    {col.cell(row, i)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
