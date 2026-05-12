/**
 * Template: Agency Landing Page
 *
 * Composição completa usando os componentes do design system.
 * Substitua os dados das props com conteúdo real do projeto.
 */
import { Logo }                from "../atoms/Logo";
import { NavBar }              from "../molecules/NavBar";
import { HeroSection }         from "../organisms/HeroSection";
import { LogoBar }             from "../marketing/LogoBar";
import { WorksGrid }           from "../organisms/WorksGrid";
import { ServicesSection }     from "../organisms/ServicesSection";
import { StatsRow }            from "../marketing/StatsRow";
import { TestimonialsSection }  from "../organisms/TestimonialsSection";
import { PricingSection }      from "../organisms/PricingSection";
import { FaqSection }          from "../organisms/FaqSection";
import { JournalGrid }         from "../marketing/JournalGrid";
import { CtaBanner }           from "../marketing/CtaBanner";
import { FooterSection }       from "../organisms/FooterSection";

/* ── Placeholder data ── */
const NAV_ITEMS = [
  { label: "Work",     href: "#work"     },
  { label: "Services", href: "#services" },
  { label: "Pricing",  href: "#pricing"  },
  { label: "Journal",  href: "#journal"  },
];

const STATS = [
  { value: "120", suffix: "+", label: "Projects delivered"  },
  { value: "98",  suffix: "%", label: "Client satisfaction" },
  { value: "7",               label: "Years of experience"  },
  { value: "32",  suffix: "+", label: "Team members"        },
];

const SERVICES = [
  {
    icon: <SparklesIcon />,
    title: "Brand Strategy",
    description: "Positioning, messaging, and identity systems that set your brand apart in competitive markets.",
  },
  {
    icon: <PaletteIcon />,
    title: "Visual Design",
    description: "From logos to full design systems — we craft visuals that communicate and convert.",
  },
  {
    icon: <CodeIcon />,
    title: "Web Development",
    description: "Performant, accessible, and beautifully engineered web experiences built to scale.",
  },
  {
    icon: <ChartIcon />,
    title: "Growth Marketing",
    description: "Data-driven campaigns that turn your design investments into measurable business growth.",
  },
];

const PRICING_TIERS = [
  {
    tier:        "Starter",
    price:       "$2,400",
    period:      "/project",
    description: "For small teams and founders who need a solid foundation fast.",
    features: [
      { label: "Brand identity design", included: true  },
      { label: "Up to 5 pages",         included: true  },
      { label: "Design system",         included: false },
      { label: "Ongoing support",       included: false },
    ],
    ctaLabel:    "Get started",
    highlighted: false,
  },
  {
    tier:        "Studio",
    price:       "$6,800",
    period:      "/project",
    description: "Full-spectrum creative partnership for growth-stage companies.",
    features: [
      { label: "Brand identity design", included: true },
      { label: "Unlimited pages",       included: true },
      { label: "Design system",         included: true },
      { label: "Ongoing support",       included: true },
    ],
    ctaLabel:    "Start the project",
    highlighted: true,
    badge:       "Most popular",
  },
];

const FAQ_ITEMS = [
  {
    question: "How long does a typical project take?",
    answer:   "Most brand and web projects take 4–8 weeks from kickoff to delivery, depending on scope and feedback cycles. We share a detailed timeline during onboarding.",
  },
  {
    question: "Do you work with international clients?",
    answer:   "Absolutely. We operate fully remotely and have delivered projects across North America, Europe, and Latin America. Timezone gaps are managed via async documentation.",
  },
  {
    question: "What does the process look like?",
    answer:   "We start with a discovery workshop, move to strategy and concepts, then into production and review cycles. Every stage includes structured feedback checkpoints.",
  },
  {
    question: "Do you offer retainer engagements?",
    answer:   "Yes. After a project is delivered, many clients choose a monthly retainer for ongoing design and development support. We tailor the scope to what you actually need.",
  },
];

const TESTIMONIALS = [
  {
    quote:       "Working with this team completely changed how we present ourselves to the market. The work is exceptional and the process is smooth.",
    authorName:  "Alex Rivera",
    authorRole:  "CEO",
    authorCompany: "Meridian Labs",
    rating:      5,
  },
  {
    quote:       "They delivered a design system that our engineering team actually loves using. Clear, scalable, and beautiful — exactly what we needed.",
    authorName:  "Mia Chen",
    authorRole:  "Head of Product",
    authorCompany: "Folia Health",
    rating:      5,
  },
  {
    quote:       "The attention to detail and strategic thinking at every stage made this collaboration stand out from other agencies we've worked with.",
    authorName:  "James Okafor",
    authorRole:  "Founder",
    authorCompany: "Kove Studio",
    rating:      5,
  },
];

export function AgencyLandingPage() {
  return (
    <div className="min-h-screen bg-bg text-fg font-body antialiased">
      <NavBar
        logo={<Logo variant="full" size="md" />}
        items={NAV_ITEMS}
        ctaLabel="Start project"
      />

      <main>
        <HeroSection
          badge="Now accepting projects for Q3"
          headline="We build brands that move markets"
          subheadline="Strategy, design, and development — from first spark to final pixel."
          primaryCtaLabel="Start a project"
          secondaryCtaLabel="See our work"
          media={
            <div className="rounded-2xl overflow-hidden border border-border bg-bg h-96 flex items-center justify-center text-fg-subtle text-body-sm">
              {/* Replace with actual media / video / image */}
              Featured project media
            </div>
          }
        />

        <LogoBar
          label="Trusted by forward-thinking companies"
          logos={[
            { name: "Company A", logo: <PlaceholderLogo label="A" /> },
            { name: "Company B", logo: <PlaceholderLogo label="B" /> },
            { name: "Company C", logo: <PlaceholderLogo label="C" /> },
            { name: "Company D", logo: <PlaceholderLogo label="D" /> },
            { name: "Company E", logo: <PlaceholderLogo label="E" /> },
          ]}
        />

        <StatsRow stats={STATS} />

        <section id="work">
          <WorksGrid
            eyebrow="Portfolio"
            headline="Selected works"
            projects={[
              { id: "1", title: "Brand Refresh", category: "Branding",    duration: "6 wks" },
              { id: "2", title: "SaaS Platform",  category: "Web Design", duration: "10 wks" },
              { id: "3", title: "E-commerce UX",  category: "Web Design", duration: "8 wks",  featured: true },
              { id: "4", title: "Identity System", category: "Branding",  duration: "4 wks" },
            ]}
            categories={["Branding", "Web Design"]}
            ctaLabel="See all works"
          />
        </section>

        <section id="services">
          <ServicesSection
            eyebrow="What we do"
            headline="Services that drive results"
            services={SERVICES}
            columns={4}
          />
        </section>

        <TestimonialsSection
          eyebrow="Client love"
          headline="What our clients say"
          testimonials={TESTIMONIALS}
          layout="grid"
        />

        <section id="pricing">
          <PricingSection
            eyebrow="Investment"
            headline="Straightforward pricing"
            subtext="No hidden fees, no scope creep surprises."
            tiers={PRICING_TIERS}
          />
        </section>

        <FaqSection
          eyebrow="Questions"
          headline="Common questions, honest answers"
          items={FAQ_ITEMS}
          layout="split"
        />

        <section id="journal">
          <JournalGrid
            eyebrow="Insights"
            headline="From the studio"
            articles={[
              {
                slug:        "brand-vs-branding",
                title:       "Brand vs. Branding: Why the distinction matters",
                excerpt:     "Most founders conflate the two. Understanding the difference is the first step to building something that lasts.",
                category:    "Strategy",
                publishedAt: "Apr 2026",
                readTime:    "5 min read",
                featured:    true,
              },
              {
                slug:        "design-systems-roi",
                title:       "The ROI of a design system",
                excerpt:     "Hard numbers on how a shared component library reduces dev time and improves consistency.",
                category:    "Design",
                publishedAt: "Mar 2026",
                readTime:    "7 min read",
              },
              {
                slug:        "web-performance-conversions",
                title:       "How load time kills your conversion rate",
                excerpt:     "Every 100ms matters. We break down the data and what you can actually do about it.",
                category:    "Development",
                publishedAt: "Feb 2026",
                readTime:    "6 min read",
              },
            ]}
            ctaLabel="All articles"
          />
        </section>

        <CtaBanner
          headline="Ready to build something remarkable?"
          subtext="Spots are limited. Let's talk about your project."
          primaryCtaLabel="Book a call"
          secondaryCtaLabel="View pricing"
          variant="dark"
        />
      </main>

      <FooterSection
        logo={<Logo variant="full" size="md" />}
        tagline="We build brands and digital experiences for companies that want to lead."
        columns={[
          {
            title: "Company",
            links: [
              { label: "Work",    href: "#work"    },
              { label: "Studio",  href: "#studio"  },
              { label: "Journal", href: "#journal" },
              { label: "Contact", href: "#contact" },
            ],
          },
          {
            title: "Services",
            links: [
              { label: "Brand Strategy",    href: "#" },
              { label: "Visual Design",     href: "#" },
              { label: "Web Development",   href: "#" },
              { label: "Growth Marketing",  href: "#" },
            ],
          },
        ]}
        legal="© 2026 Studio. All rights reserved."
      />
    </div>
  );
}

/* ── Inline placeholder icons ── */
function SparklesIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3v1m0 16v1M4.22 4.22l.7.7m12.16 12.16.7.7M3 12h1m16 0h1M4.92 19.08l.7-.7M18.36 5.64l.7-.7" strokeLinecap="round" />
    </svg>
  );
}
function PaletteIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" /><circle cx="9" cy="10" r="1.5" fill="currentColor" /><circle cx="15" cy="10" r="1.5" fill="currentColor" /><circle cx="12" cy="15" r="1.5" fill="currentColor" />
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}
function PlaceholderLogo({ label }: { label: string }) {
  return (
    <span className="font-body font-bold text-heading-md opacity-40">{label}</span>
  );
}
