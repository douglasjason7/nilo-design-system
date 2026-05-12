# Visual and Technical Analysis Framework

Use this framework to analyze any website URL before creating the design system.

## 1. First Impression

Capture the immediate perception:

- What kind of brand does it feel like?
- What emotional tone does it create?
- Is the design more editorial, commercial, institutional, premium, playful, tech, industrial, or minimal?
- What type of user does it seem designed for?
- Is the interface more content-led, product-led, conversion-led, or brand-led?

## 2. Page Architecture

Map the page structure from top to bottom.

For each section, identify:

- Section name
- Purpose
- Layout type
- Main content blocks
- CTA presence
- Visual hierarchy
- Components used
- Reusability level

Example:

| Section | Purpose | Layout | Reusable as |
|---|---|---|---|
| Hero | Communicate core promise | Split text + image | Organism / HeroSplit |
| Feature Grid | Explain benefits | 3-column cards | Marketing / FeatureGrid |
| CTA Strip | Conversion | Centered block | Marketing / ConversionCTA |

## 3. Visual Foundations

Analyze:

- Color palette
- Typography scale
- Spacing rhythm
- Grid behavior
- Radius
- Shadows
- Borders
- Icon style
- Image treatment
- Motion language

## 4. Component Detection

Classify observed UI elements into:

- Atoms
- Molecules
- Organisms
- Templates
- Marketing components

## 5. Interaction Detection

Check:

- Hover states
- Menu behavior
- Accordions
- Tabs
- Carousels
- Sticky headers
- Forms
- Scroll animations
- Reveal effects
- CTA states

## 6. Conversion Logic

Identify:

- Primary CTA
- Secondary CTA
- Trust-building elements
- Objection handling
- Proof points
- Value proposition
- Offer framing
- Friction points

## 7. System Translation

Convert the observed design into reusable rules.

Do not say only:

“The site uses large headings.”

Instead say:

“The system uses oversized editorial headings with tight line-height, high contrast, and generous spacing. This becomes the token pair `text-display` + `leading-display` + `tracking-tight`.”
