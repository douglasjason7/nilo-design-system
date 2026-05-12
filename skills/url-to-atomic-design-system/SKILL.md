---
name: url-to-atomic-design-system
description: Analyze any provided website URL and generate a complete atomic design system, including primitives, tokens, atoms, molecules, organisms, full marketing sections, Figma components via MCP, and Tailwind-ready components.
---

# URL to Atomic Design System Skill

## Purpose

Use this skill whenever the user provides a website URL and asks to create, extract, analyze, rebuild, systematize, or reproduce a design system based on that visual reference.

This skill transforms a visual and technical website analysis into:

1. Design tokens
2. Atomic design structure
3. Figma component architecture
4. Tailwind component architecture
5. Reusable marketing components
6. Section-level organisms
7. Documentation for future UI production

The goal is not to copy the website literally, but to extract its visual logic, interaction patterns, hierarchy, spacing behavior, component philosophy, and marketing structure, then translate that into a reusable design system.

---

## Core Philosophy

This skill follows Atomic Design:

1. Foundations / Design Tokens
2. Atoms
3. Molecules
4. Organisms
5. Templates
6. Pages
7. Marketing Components

However, this skill extends Atomic Design beyond interface primitives.

It must also identify:

- Hero sections
- Benefit sections
- Feature grids
- Product showcases
- Testimonial blocks
- Pricing blocks
- FAQ sections
- Conversion blocks
- Navigation systems
- Footer systems
- Editorial/content blocks
- Brand storytelling sections
- Reusable landing page sections
- Campaign components
- Trust-building modules
- Visual rhythm patterns
- Motion and interaction patterns

---

## When to Use

Use this skill when the user says things like:

- “Analyze this URL and create a design system”
- “Create a design system based on this website”
- “Use this site as visual reference”
- “Build components in Figma from this reference”
- “Transform this website into Tailwind components”
- “Create an atomic design system from this interface”
- “Map the design language of this URL”
- “Recreate this style as reusable components”
- “Create marketing components based on this site”

---

## Inputs Expected

The user may provide:

- One or more URLs
- A brand name
- A project name
- A target platform, such as Figma, React, Tailwind, Nuvemshop, WordPress, Webflow, or custom front-end
- Optional screenshots
- Optional existing wireframes
- Optional existing copy
- Optional brand guidelines

If some information is missing, proceed with reasonable assumptions and document those assumptions.

---

## High-Level Workflow

When activated, follow this sequence:

1. Understand the project context.
2. Access and visually inspect the provided URL.
3. Analyze the website at desktop width first.
4. If relevant, analyze tablet and mobile behavior.
5. Extract visual foundations.
6. Identify atomic components.
7. Identify section-level organisms.
8. Identify marketing components.
9. Define Figma architecture.
10. Create or update Figma components through MCP when available.
11. Define Tailwind implementation.
12. Generate documentation and component specifications.
13. Provide next-step prompts for expansion.

---

## Analysis Dimensions

Always analyze the reference website through these dimensions:

### 1. Brand Impression

Identify the perceived brand attributes:

- Premium
- Minimal
- Editorial
- Corporate
- Institutional
- Organic
- Technological
- Luxury
- Brutalist
- Playful
- Scientific
- Industrial
- Humanized
- Boutique
- Conversion-focused

Describe the visual language without copying proprietary content.

### 2. Layout System

Analyze:

- Max-width containers
- Grid structure
- Column behavior
- Section rhythm
- Visual density
- Asymmetry or symmetry
- White space behavior
- Viewport usage
- Fold strategy
- Section stacking
- Scroll storytelling

### 3. Typography

Extract:

- Font style category
- Heading hierarchy
- Body text style
- Eyebrow/kicker style
- Button text style
- Navigation text style
- Line-height rhythm
- Letter spacing
- Text transform patterns
- Approximate type scale

If exact font names are unavailable, infer the category and recommend equivalent Google Fonts or system fonts.

### 4. Color System

Extract:

- Primary colors
- Secondary colors
- Neutral palette
- Background colors
- Surface colors
- Text colors
- Border colors
- Accent colors
- Semantic colors if present
- Gradient behavior if present
- Overlay colors

Create Tailwind-compatible token names.

### 5. Spacing System

Extract:

- Container padding
- Section padding
- Card padding
- Grid gaps
- Stack spacing
- Button padding
- Form spacing
- Navigation spacing

Normalize spacing into Tailwind scale whenever possible.

### 6. Borders, Radius and Shadows

Analyze:

- Border width
- Border color
- Border behavior
- Radius style
- Card elevation
- Shadow intensity
- Surface layering
- Dividers
- Hairlines

### 7. Imagery and Media

Analyze:

- Image ratio
- Image treatment
- Cropping behavior
- Masking
- Overlays
- Product image logic
- Human imagery
- Environmental imagery
- Video usage
- Icon usage
- Illustration usage

### 8. Motion and Interaction

Analyze:

- Hover states
- Button states
- Link states
- Menu behavior
- Scroll reveal
- Sticky elements
- Microinteractions
- Carousel behavior
- Accordion behavior
- Transition duration
- Easing style

### 9. Content and Marketing Structure

Identify reusable marketing patterns:

- Primary promise
- Subpromise
- Social proof
- Differentiators
- Use cases
- Problem-solution blocks
- Trust indicators
- Product/service explanation
- Process sections
- Before/after logic
- CTA hierarchy
- FAQ strategy
- Conversion path

---

## Atomic Design Output

Create the system using this taxonomy.

### Foundations

- Color tokens
- Typography tokens
- Spacing tokens
- Radius tokens
- Shadow tokens
- Border tokens
- Motion tokens
- Grid tokens
- Breakpoint tokens
- Z-index tokens

### Atoms

Examples:

- Button
- Text link
- Badge
- Tag
- Icon
- Logo
- Input
- Label
- Checkbox
- Radio
- Divider
- Avatar
- Image
- Heading
- Paragraph
- Eyebrow
- Price
- Stat number

### Molecules

Examples:

- Navigation item
- CTA group
- Search field
- Form field
- Feature item
- Benefit item
- Stat item
- Testimonial card
- Product card
- Service card
- Icon text block
- Accordion item
- Breadcrumb
- Newsletter field
- Social proof row
- Trust seal group

### Organisms

Examples:

- Header
- Mobile menu
- Hero section
- Feature grid
- Product showcase
- Benefits section
- Testimonial section
- Pricing section
- FAQ section
- Contact section
- Footer
- Logo cloud
- Case study block
- Blog/article grid
- Conversion banner
- Lead capture form
- Comparison section

### Templates

Examples:

- Landing page template
- Institutional homepage template
- Product page template
- Service page template
- Blog post template
- Category page template
- Case study template

### Marketing Components

Marketing components are reusable conversion-oriented organisms.

Examples:

- Hero with proof
- Hero with product visual
- Authority block
- Problem-agitation-solution block
- Benefits stack
- Differentiator grid
- Social proof module
- Product value stack
- Offer block
- Conversion CTA strip
- Objection handling FAQ
- Before/after block
- Process timeline
- Trust and certification block
- Lead magnet block

---

## Figma MCP Workflow

When Figma MCP is available, create the design system in this order:

1. Create a page named `00 - Foundations`
2. Create a page named `01 - Atoms`
3. Create a page named `02 - Molecules`
4. Create a page named `03 - Organisms`
5. Create a page named `04 - Marketing Components`
6. Create a page named `05 - Templates`
7. Create a page named `06 - Playground`

For each page, create organized frames.

Use naming conventions:

- `Foundation / Color / Primary`
- `Foundation / Typography / Heading / H1`
- `Atom / Button / Primary`
- `Atom / Button / Secondary`
- `Molecule / Feature Card / Default`
- `Organism / Hero / Split Visual`
- `Marketing / CTA / Conversion Strip`
- `Template / Landing Page / Default`

All Figma components should:

- Use auto layout
- Use consistent naming
- Use variants where applicable
- Use semantic tokens
- Avoid hardcoded one-off styles
- Be built from smaller components when possible
- Include desktop-first structure
- Prepare for responsive adaptation

---

## Tailwind Workflow

When generating Tailwind components:

1. Create design tokens first.
2. Extend `tailwind.config.ts`.
3. Create primitive components.
4. Create composed components.
5. Create section components.
6. Create template/page examples.

Use semantic class composition.

Avoid overly generic names like:

- `blue`
- `big`
- `small`
- `section1`
- `card2`

Prefer semantic names like:

- `brand-primary`
- `surface-muted`
- `text-heading`
- `section-padding`
- `radius-card`
- `shadow-soft`
- `HeroSplitVisual`
- `FeatureGrid`
- `ConversionCTA`

---

## Required Output

After analyzing a URL, always provide:

1. Visual diagnosis
2. Extracted design principles
3. Token proposal
4. Atomic component list
5. Marketing component list
6. Figma structure
7. Tailwind structure
8. Implementation roadmap
9. Risks and assumptions
10. Next prompts for continuation

---

## Important Rules

Do not blindly copy the website.

Do not reproduce proprietary text, brand assets, logos, or copyrighted imagery unless the user owns them or explicitly provides them.

Extract visual logic and component architecture.

Always distinguish between:

- Observed pattern
- Inferred rule
- Recommended system token
- Component implementation

If the URL cannot be fully inspected, use screenshots, available HTML/CSS, or user-provided references and clearly state the limitation.

When building in Figma, prioritize structure, components, auto layout, naming, and scalability before visual decoration.

When building Tailwind components, prioritize maintainability, semantic tokens, responsiveness, and reusability.

---

## Final Response Style

When reporting to the user:

- Be direct
- Use clear sections
- Avoid unnecessary theory
- Show practical output
- Include implementation-ready snippets when useful
- Ask for the next URL only after delivering a usable structure
