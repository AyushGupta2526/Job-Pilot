# UI Registry

Living document. Updated after every component is built. Read this before building any new component — match existing patterns exactly before inventing new ones.

---

## How to Use

Before building any component:

1. Check if a similar component already exists here
2. If yes — match its exact classes
3. If no — build it following ui-rules.md and ui-tokens.md, then add it here

After building any component — update this file with the component name, file path, and exact classes used.

---

## Components

### Homepage Shell

- File: `app/page.tsx`
- Key layout classes:
	- Outer frame: `mx-auto max-w-360 rounded-xl border border-border bg-surface`
	- Base page spacing: `bg-background px-3 py-3 sm:px-5 sm:py-5 lg:px-8 lg:py-8`
	- Header: `flex h-16 items-center justify-between border-b border-border px-4 sm:px-6 lg:px-8`
- Hero pattern:
	- Gradient panel using radial overlays on white surface
	- Centered heading with large display typography
	- Dual CTA row: dark primary + bordered secondary
	- Embedded dashboard mock in muted sub-surface with strong shadow
- Split feature sections:
	- Two-column bordered grid (`lg:grid-cols-2`) with one text panel + one image panel
	- First split: heading + three bordered text rows on left, jobs table image on right
	- Second split: agent log image on left, three value-prop rows on right
- Social proof section:
	- Centered uppercase eyebrow + large quote + compact author row with avatar
- Bottom CTA strip:
	- Reuses hero gradient motif with centered copy and repeated dual CTA buttons
- Footer:
	- Logo left, compact link row right, collapses to stacked layout on mobile
