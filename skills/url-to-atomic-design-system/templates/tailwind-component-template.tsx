import * as React from "react";

type ComponentProps = {
    children?: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
};

const variantClasses = {
    primary: "bg-brand-primary text-text-inverse hover:bg-brand-primary-hover",
    secondary: "bg-surface-muted text-text-primary hover:bg-surface-strong",
    ghost: "bg-transparent text-text-primary hover:bg-surface-muted",
};

const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-6 py-4 text-lg",
};

export function ComponentName({
    children,
    className = "",
    variant = "primary",
    size = "md",
}: ComponentProps) {
    return (
        <div
            className={[
                "inline-flex items-center justify-center rounded-button font-medium transition-colors duration-200",
                variantClasses[variant],
                sizeClasses[size],
                className,
            ].join(" ")}
        >
            {children}
        </div>
    );
}
