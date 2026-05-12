# Tailwind Component Rules

## Goal

Create Tailwind components that reflect the analyzed design system.

## Token Strategy

Use semantic tokens instead of literal colors.

Bad:

```tsx
className="bg-blue-500 text-gray-900 rounded-lg"
```

Good:

```tsx
className="bg-brand-primary text-text-inverse rounded-button"
```

## Tailwind Config Structure

Extend:

- colors
- fontFamily
- fontSize
- spacing
- borderRadius
- boxShadow
- transitionTimingFunction
- maxWidth

## Component Structure

Use this hierarchy:

```
src/
  components/
    atoms/
    molecules/
    organisms/
    marketing/
    templates/
  styles/
    tokens.ts
    tailwind.css
```

## Naming Rules

Use PascalCase for components:

```
Button
FeatureCard
HeroSplit
ConversionCTA
ProductShowcase
```

Use semantic prop names:

```
variant="primary"
size="lg"
tone="brand"
mediaPosition="right"
```

## Responsiveness

All components should be desktop-first when the user requests desktop-first.

Still, prepare responsive classes:

```tsx
className="grid gap-8 lg:grid-cols-3"
```

## Variants

Components should support variants when the visual system suggests them.

Example button variants:

- primary
- secondary
- ghost
- link

Example section variants:

- default
- muted
- dark
- editorial
- product
- centered

## Marketing Component Rules

Marketing components should include:

- Clear headline
- Supporting copy
- CTA area
- Optional proof element
- Optional media
- Reusable layout
- Responsive behavior
