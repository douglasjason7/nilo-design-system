# Figma MCP Workflow

## Goal

Use Figma MCP to create a clean, scalable design system based on the analyzed URL.

## Page Structure

Create the following Figma pages:

1. `00 - Foundations`
2. `01 - Atoms`
3. `02 - Molecules`
4. `03 - Organisms`
5. `04 - Marketing Components`
6. `05 - Templates`
7. `06 - Playground`

## General Rules

All elements should use:

- Auto layout
- Semantic naming
- Component variants
- Clear frame hierarchy
- Consistent spacing
- Reusable primitives

Avoid:

- Random frame names
- Hardcoded colors without tokens
- One-off styles
- Components detached from their primitives
- Inconsistent padding
- Visual duplication

## Naming Convention

Use this pattern:

```txt
Category / Component / Variant / State

Examples:

Atom / Button / Primary / Default
Atom / Button / Primary / Hover
Molecule / Product Card / Featured
Organism / Hero / Split Visual
Marketing / CTA / Conversion Strip
Template / Landing Page / Default
```

## Figma Build Order

1. Create color styles
2. Create typography styles
3. Create spacing reference
4. Create primitive atoms
5. Create buttons and form elements
6. Create cards and content blocks
7. Create organisms
8. Create marketing components
9. Create template examples
10. Create a playground page with combinations

## Component Requirements

Each component should include:

- Name
- Description
- Anatomy
- Variants
- States
- Usage notes
- Responsive behavior
- Tailwind equivalent class strategy