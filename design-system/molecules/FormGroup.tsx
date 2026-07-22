"use client";

import { ReactNode, useId } from "react";
import { cn } from "../utils/cn";

interface FormGroupProps {
  label: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  htmlFor?: string;
  className?: string;
  children: (props: { id: string; "aria-describedby"?: string; "aria-invalid"?: boolean }) => ReactNode;
}

export function FormGroup({ label, hint, error, required, htmlFor, className, children }: FormGroupProps) {
  const reactId = useId();
  const id = htmlFor ?? `fg-${reactId}`;
  const hintId  = hint  ? `${id}-hint`  : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="font-body font-medium text-body-sm text-fg">
        {label}
        {required && <span aria-hidden className="text-error-500 ml-0.5">*</span>}
      </label>
      {children({ id, "aria-describedby": describedBy, "aria-invalid": !!error })}
      {hint  && !error && <p id={hintId}  className="font-body text-caption text-fg-muted">{hint}</p>}
      {error &&            <p id={errorId} className="font-body text-caption text-error-400" role="alert">{error}</p>}
    </div>
  );
}
