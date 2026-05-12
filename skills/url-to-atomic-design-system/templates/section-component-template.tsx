import * as React from "react";

type SectionProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    primaryCta?: {
        label: string;
        href: string;
    };
    secondaryCta?: {
        label: string;
        href: string;
    };
    children?: React.ReactNode;
};

export function MarketingSection({
    eyebrow,
    title,
    description,
    primaryCta,
    secondaryCta,
    children,
}: SectionProps) {
    return (
        <section className="bg-background-primary px-container py-section">
            <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-2 lg:items-center">
                <div className="max-w-content">
                    {eyebrow && (
                        <p className="mb-4 text-eyebrow font-medium uppercase tracking-eyebrow text-brand-primary">
                            {eyebrow}
                        </p>
                    )}

                    <h2 className="text-heading-2 font-semibold tracking-tight text-text-primary">
                        {title}
                    </h2>

                    {description && (
                        <p className="mt-5 text-body-lg leading-relaxed text-text-secondary">
                            {description}
                        </p>
                    )}

                    {(primaryCta || secondaryCta) && (
                        <div className="mt-8 flex flex-wrap gap-4">
                            {primaryCta && (
                                <a
                                    href={primaryCta.href}
                                    className="rounded-button bg-brand-primary px-6 py-3 text-button font-medium text-text-inverse transition-colors hover:bg-brand-primary-hover"
                                >
                                    {primaryCta.label}
                                </a>
                            )}

                            {secondaryCta && (
                                <a
                                    href={secondaryCta.href}
                                    className="rounded-button border border-border-primary px-6 py-3 text-button font-medium text-text-primary transition-colors hover:bg-surface-muted"
                                >
                                    {secondaryCta.label}
                                </a>
                            )}
                        </div>
                    )}
                </div>

                <div className="relative">
                    {children}
                </div>
            </div>
        </section>
    );
}