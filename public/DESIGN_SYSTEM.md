# Project Manager Design System Abstract

This file documents the **current** visual system used in this app so it can be reused in other projects with the same look and feel.

## 1) Visual Principles

- Mono-editorial aesthetic with strong geometry.
- Cool blue canvas with high-contrast navy ink strokes.
- Square-ish components (minimal rounding) and explicit borders.
- Compact controls with tight tracking for labels and actions.
- Clear UI hierarchy: title/meta -> divider -> content.

## 2) Theme Tokens (Tailwind v4 `@theme`)

Defined in `src/index.css`.

### Color Tokens

- `--color-ink: #0a1a3a` (primary foreground, borders; deep navy)
- `--color-canvas: #06122b` (app background; very dark blue)
- `--color-surface: #dbeafe` (cards/panels/buttons base; light sky blue)
- `--color-surface-hover: #bfdbfe` (surface hover)
- `--color-muted: #1e3a8a` (secondary text; medium-deep blue)
- `--color-accent: #60a5fa` and `--color-accent-hover: #38bdf8` (interactive blue to sky blue)
- `--color-danger: #1d4ed8` and `--color-danger-hover: #1e40af` (high-emphasis action in darker blue)

### Typography

- Font stack: `"Noto Sans Mono", ui-monospace, SFMono-Regular, Menlo, monospace`
- Body text target: around `1.05rem`
- Headings:
  - Section level: `text-2xl`, uppercase, `tracking-[0.125rem]`
  - Main project title: `text-3xl`, bold, `tracking-[0.03125rem]`
- Small UI controls: `text-xs` to `text-sm`, medium/semibold

### Motion and Interaction

- Primary transition style: `transition-colors duration-200`
- Focus language: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink`
- Buttons globally use pointer cursor unless disabled.

## 3) Layout System

- App frame has balanced top/left/right margins (`pl/pr/pt` responsive scale).
- Main columns use flex row: fixed-width sidebar + fluid project pane.
- Sidebar and project pane share equal height:
  - `h-[calc(100vh-2rem)]`
  - `sm:h-[calc(100vh-3rem)]`
- Surface containers use `border-2 border-ink bg-surface`.

## 4) Component Patterns

### Sidebar

- Container: bordered surface card with strong title treatment.
- Primary action (`+ Add Project`): dark ink fill, light text, darker navy hover (`#122855`).
- Project list rows: bordered clickable blocks with persistent selected state.

### Project View

- Header contains project title + date metadata.
- Destructive action (`Delete`) sits in header row on the right.
- Description appears before divider.
- Divider is inset (`mx-*`) so it does not touch pane edges.

### Tasks Section

- Section heading mirrors system title style.
- Add-task form uses equal-height input and button.
- Task rows use dimmed gray border for lower visual weight.
- Right-aligned compact actions:
  - `Edit`: dim blue tone
  - `Clear`: deep blue tone
- Inline edit uses underline/inset style input (not boxed) to avoid nested borders.

### Dialog/Modal Pattern

- Uses native `dialog` + `createPortal` into `#root`.
- Centered with `fixed inset-0 m-auto`.
- Backdrop dim: `backdrop:bg-black/45`.
- Action pair standard:
  - Secondary: `Cancel` (neutral)
  - Primary/destructive: `Continue`

## 5) Reusable Utility Recipes

- **Panel shell**
  - `border-2 border-ink bg-surface p-6 sm:p-8`
- **Primary dark action**
  - `border-2 border-ink bg-ink text-surface hover:bg-[#122855]`
- **Neutral action**
  - `border-2 border-ink bg-surface text-ink hover:bg-surface-hover`
- **Danger action (small)**
  - `border-2 border-danger bg-surface text-danger hover:bg-sky-100 hover:text-danger-hover`
- **Compact micro-action**
  - `border px-1.5 py-0.5 text-[0.6875rem] font-medium`

## 6) Accessibility/Usability Notes

- Preserve visible focus on all keyboard-targetable controls.
- Use `time` element for due dates where possible.
- Keep action labels concise and explicit (`Edit`, `Clear`, `Cancel`, `Continue`).
- Use stable IDs for projects/tasks and key list items by ID.

## 7) Porting Checklist

When reusing this system in another project:

1. Copy token block from `src/index.css` (`@theme` and base font/body rules).
2. Keep panel/button recipes as utility presets or component classes.
3. Preserve 2px border language and tracking values.
4. Keep modal architecture (`dialog` + portal to root).
5. Keep vertical rhythm (`gap-2/4/6`, inset dividers, fixed pane heights if split layout).
