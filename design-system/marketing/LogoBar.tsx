import { cn } from "../utils/cn";

interface LogoBarProps {
  label?:     string;
  logos:      Array<{ name: string; logo: React.ReactNode }>;
  marquee?:   boolean;
  className?: string;
}

function LogoItem({ name, logo }: { name: string; logo: React.ReactNode }) {
  return (
    <div
      className="flex items-center justify-center text-fg-subtle hover:text-fg-muted transition-colors duration-base px-6"
      aria-label={name}
      title={name}
    >
      {logo}
    </div>
  );
}

export function LogoBar({ label, logos, marquee = false, className }: LogoBarProps) {
  return (
    <div className={cn("py-12 px-6 xl:px-20 max-w-container mx-auto w-full", className)}>
      {label && (
        <p className="font-body text-label-sm text-fg-subtle uppercase tracking-widest text-center mb-8">
          {label}
        </p>
      )}

      {marquee ? (
        /*
         * aria-hidden: evita que leitores de tela leiam o conjunto duplicado.
         * Keys prefixadas com "a-" e "b-" para garantir unicidade entre as duas cópias.
         */
        <div
          className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          aria-hidden="true"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {logos.map((item, i) => (
              <LogoItem key={`a-${i}`} name={item.name} logo={item.logo} />
            ))}
            {logos.map((item, i) => (
              <LogoItem key={`b-${i}`} name={item.name} logo={item.logo} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {logos.map((item, i) => (
            <LogoItem key={i} name={item.name} logo={item.logo} />
          ))}
        </div>
      )}
    </div>
  );
}
