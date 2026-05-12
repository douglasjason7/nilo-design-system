# Output Contract

Whenever this skill analyzes a URL, return the result using this structure.

## 1. Visual Diagnosis

Summarize the design direction.

Include:

- Brand impression
- Interface maturity
- Visual density
- Marketing style
- Conversion posture

## 2. Extracted Design Principles

List the design rules that define the reference.

Example:

- Large editorial headings
- Neutral background with restrained accent color
- Generous whitespace
- Product-led visual sections
- Soft cards with minimal borders

## 3. Design Tokens

Return tokens for:

- Colors
- Typography
- Spacing
- Radius
- Shadows
- Borders
- Motion
- Grid

## 4. Atomic Components

Return a table:

| Level | Component | Variants | Notes |
|---|---|---|---|

## 5. Marketing Components

Return a table:

| Component | Purpose | Anatomy | Reusable For |
|---|---|---|---|

## 6. Figma Build Plan

Return:

- Pages to create
- Components to create
- Naming convention
- Auto layout rules
- Variant strategy

## 7. Tailwind Build Plan

Return:

- Folder structure
- Token strategy
- Component list
- Example classes
- Tailwind config recommendations

## 8. Implementation Roadmap

Divide into phases:

1. Foundations
2. Atoms
3. Molecules
4. Organisms
5. Marketing components
6. Templates
7. QA and documentation

## 9. Risks and Assumptions

Mention:

- If fonts were inferred
- If colors were approximated
- If animations were not fully inspectable
- If screenshots or access were limited

## 10. Next Actions

Give the user practical next steps.
