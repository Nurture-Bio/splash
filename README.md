# Nurture Bio — Splash

Stealth-mode splash page.

**Live:** [nurture-bio.github.io/splash/](https://nurture-bio.github.io/splash/)

---

## Design System

### Colors

All colors are OKLCH. Drop the `@theme` block from `src/index.css` into any Tailwind v4 project to use them.

#### Surfaces — Midnight Navy (hue 250)

| Token | OKLCH | Use |
|-------|-------|-----|
| `--color-void` | `oklch(0.120 0.020 250)` | Deepest background |
| `--color-base` | `oklch(0.160 0.024 250)` | Default surface |
| `--color-raised` | `oklch(0.200 0.028 250)` | Cards, panels |
| `--color-elevated` | `oklch(0.240 0.032 250)` | Modals, popovers |

#### Accent — Electric Cyan (hue 195)

| Token | OKLCH | Use |
|-------|-------|-----|
| `--color-cyan` | `oklch(0.750 0.180 195)` | CTAs, focus, highlights |
| `--color-cyan-dim` | `oklch(0.540 0.120 195)` | Borders, active states |
| `--color-cyan-wash` | `oklch(0.220 0.040 195)` | Subtle tints, badges |

#### Secondary — Soft Violet (hue 280)

| Token | OKLCH | Use |
|-------|-------|-----|
| `--color-violet` | `oklch(0.620 0.150 280)` | Secondary highlights |
| `--color-violet-dim` | `oklch(0.440 0.100 280)` | Borders, icons |
| `--color-violet-wash` | `oklch(0.200 0.040 280)` | Subtle tints, badges |

#### Text

| Token | OKLCH | Use |
|-------|-------|-----|
| `--color-fg` | `oklch(0.930 0.008 250)` | Primary text |
| `--color-fg-2` | `oklch(0.650 0.015 250)` | Secondary text |
| `--color-fg-3` | `oklch(0.440 0.012 250)` | Muted text, labels |

#### Borders

| Token | OKLCH | Use |
|-------|-------|-----|
| `--color-line` | `oklch(0.260 0.020 250)` | Default borders |
| `--color-line-2` | `oklch(0.340 0.024 250)` | Stronger borders |

#### Glows

| Token | Value | Use |
|-------|-------|-----|
| `--glow-cyan` | `0 0 24px oklch(0.750 0.180 195 / 0.25)` | Cyan box-shadow glow |
| `--glow-violet` | `0 0 24px oklch(0.620 0.150 280 / 0.20)` | Violet box-shadow glow |

---

### Typography

Single font: **DM Sans** — weight and tracking variants only, no second typeface.

### Timing

All durations are φ-derived (golden ratio × 160ms perceptual threshold).

| Token | Value | Use |
|-------|-------|-----|
| `--t-instant` | `61ms` | Micro-feedback |
| `--t-fast` | `99ms` | Hover states |
| `--t-base` | `160ms` | Default transitions |
| `--t-ease` | `259ms` | Entrances |
| `--t-slow` | `419ms` | Exits |
| `--t-drift` | `678ms` | Scroll reveals |

### Easing

| Token | Curve |
|-------|-------|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--ease-in` | `cubic-bezier(0.7, 0, 0.84, 0)` |
| `--ease-move` | `cubic-bezier(0.22, 1, 0.36, 1)` |
