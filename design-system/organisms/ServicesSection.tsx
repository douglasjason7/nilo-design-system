import { cn } from "../utils/cn";
import { ServiceCard } from "../molecules/Card";
import { Label } from "../atoms/Typography";

interface Service {
  icon:        React.ReactNode;
  title:       string;
  description: string;
}

interface ServicesSectionProps {
  eyebrow?:    string;
  headline:    string;
  services:    Service[];
  columns?:    2 | 3 | 4;
  className?:  string;
}

const colVariants = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export function ServicesSection({
  eyebrow,
  headline,
  services,
  columns = 4,
  className,
}: ServicesSectionProps) {
  return (
    <section
      className={cn(
        "py-24 px-6 xl:px-20 max-w-container mx-auto w-full",
        className
      )}
    >
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 max-w-xl">
          {eyebrow && (
            <Label uppercase muted>{eyebrow}</Label>
          )}
          <h2 className="font-display text-display-lg text-fg tracking-tight text-balance">
            {headline}
          </h2>
        </div>

        <div className={cn("grid gap-4", colVariants[columns])}>
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
