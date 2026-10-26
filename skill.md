# SKILL.md — Portfolio Web Application Design System

> **Purpose**: Reusable design system specification extracted from the portfolio home page implementation. AI agents can use this document to recreate the exact visual aesthetic, component architecture, spacing, typography, colors, animations, and responsive behavior for any user or dataset.

---

## 1. Design Tokens & Theme System

### 1.1 Color Palette

| Token Name | Hex Code / Value | Usage Description |
| :--- | :--- | :--- |
| `COLORS.cream` | `#F6F1E6` | Primary background color (Light mode) & light text color (Dark mode) |
| `COLORS.creamDark` | `#EFE8D8` | Secondary neutral background tint / subtle borders |
| `COLORS.ink` | `#17130F` | Primary dark neutral for text (Light mode) & main background (Dark mode/Footer/About) |
| `COLORS.inkSoft` | `#231D16` | Card backgrounds, subtle dark panels |
| `COLORS.orange` | `#FF7A1A` | Primary accent color, active states, focus highlights, branding |
| `COLORS.orangeDark` | `#E0670F` | Darker orange variant for status text and pressed states |
| `COLORS.muted` | `#6E6656` | Secondary body text, subheadings, metadata |
| `COLORS.white` | `#FFFFFF` | Card backgrounds (Light mode), white elements |
| `Dark Canvas` | `#0B1120` / `#0A0F1D` | Deep navy background for Testimonials and Footer |
| `Dark Card` | `#14100C` / `#18130E` | Deep charcoal card background in dark mode |
| `Glass Nav Dark` | `rgba(34, 28, 20, 0.85)` | Dark mode sticky navbar translucency |
| `Glass Nav Light` | `rgba(255, 255, 255, 0.88)`| Light mode sticky navbar translucency |
| `Green Live` | `#1E9E5A` / `#22C55E` | Live status indicators, success states, verified badges |

### 1.2 Text Selection Highlight
```css
::selection {
  background-color: #FF7A1A;
  color: #17130F;
}
::-moz-selection {
  background-color: #FF7A1A;
  color: #17130F;
}
```

---

## 2. Typography & Font Hierarchy

### 2.1 Font Families
- **Primary Sans-Serif**: System UI / Geist Sans / Inter (`font-sans`)
- **Monospace Code / Terminal**: Geist Mono / Fira Code (`font-mono`)

### 2.2 Typography Scale
- **Micro / Badge**: `9px` / `9.5px` / `10px` / `10.5px` (`text-[9px]`, `text-[10px]`) — Uppercase badges, tab labels, metadata
- **Small Body / Buttons**: `11px` / `12px` (`text-xs`) — Card tags, secondary button labels, caption text
- **Regular Body**: `13px` / `14px` (`text-sm`) — Body paragraphs, list items, description text
- **Large Body**: `15px` / `16px` / `18px` (`text-base`, `text-lg`) — Featured intro text, quotes
- **Subheadings & Card Titles**: `18px` / `20px` / `24px` (`text-lg`, `text-xl`, `text-2xl`) — Project titles, section subtitles
- **Hero & Section Headings**: `24px` / `36px` / `48px` / `60px` (`text-2xl sm:text-5xl md:text-6xl`) — Hero titles, section H2s

### 2.3 Font Weights
- `font-semibold` (600) — Subtitles, standard links
- `font-bold` (700) — Section badges, button text, card headers
- `font-extrabold` (800) — High-emphasis text highlights, filter buttons
- `font-black` (900) — Major headlines, hero titles, stats numbers

---

## 3. Spacing, Containers & Layout Grids

### 3.1 Container Widths
- `max-w-7xl` (`1280px`) — Hero container, Footer
- `max-w-6xl` (`1152px`) — Primary section container width (Skills, Services, Projects, Workflow, About, Testimonials)
- `max-w-4xl` (`896px`) — Modal dialogs, focused cards, sub-features
- `max-w-xl` / `max-w-sm` — Text wrapper limits for readable line length (max 65-75 chars)

### 3.2 Section Vertical Spacing
- Compact Section: `py-8 sm:py-16` (Skills)
- Standard Section: `py-12 sm:py-20` (Services, Projects, Workflow, About)
- Prominent Section: `py-16 sm:py-24` (Testimonials)

### 3.3 Layout Grids
- **Hero Grid**: `grid md:grid-cols-[1fr_auto_1fr]` (3-column centered avatar layout on desktop)
- **Projects Grid**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6`
- **Skills Grid**: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1.5 sm:gap-3`
- **Workflow Grid**: `grid md:grid-cols-2 gap-8 sm:gap-12` (Visual orbit circle left, detail card right)
- **About Grid**: `grid md:grid-cols-[auto_1fr] gap-5 sm:gap-12` (Avatar portrait left, bio right)
- **Footer Grid**: `grid grid-cols-1 md:grid-cols-12 gap-8` (5 cols brand, 4 cols nav, 3 cols contact)

---

## 4. Borders, Corner Radius & Shadows

### 4.1 Corner Radii
- **Full Pill**: `rounded-full` — Buttons, badges, navigation links, avatar wrappers
- **Super Card**: `rounded-3xl` (`24px`) — Major section cards, modals, testimonials card
- **Standard Card**: `rounded-2xl` (`16px`) — Project cards, service rows, interactive widgets
- **Compact Element**: `rounded-xl` (`12px`) — Icon boxes, small stat containers
- **Inner Tag**: `rounded-lg` (`8px`) / `rounded-md` (`6px`) — Pill tags, technology badges

### 4.2 Border Styling
- Light Border: `border border-[rgba(23,19,15,0.08)]`
- Accent Border: `border border-[rgba(255,122,26,0.3)]`
- Dark Mode Border: `border border-[rgba(255,255,255,0.08)]`
- Thick Accent Frame: `border-3 sm:border-4 border-[#FF7A1A]` (Avatar frame)

### 4.3 Shadow System
- `shadow-xs`: Subtle elevation for small pills
- `shadow-md`: Standard card elevation
- `shadow-lg`: Elevated buttons and popups
- `shadow-xl` / `shadow-2xl`: Modals and featured hero cards
- **Glowing Accent Shadows**:
  - `box-shadow: 0 8px 20px -4px rgba(255, 122, 26, 0.4)` (Orange CTA glow)
  - `box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5)` (Dark card depth)
  - `box-shadow: 0 14px 32px rgba(23, 19, 15, 0.14)` (Active accordion row shadow)

---

## 5. Animations & Motion Utilities

### 5.1 CSS Keyframes
```css
/* Floating vertical motion for hero avatar */
@keyframes floatY {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Continuous horizontal ticker */
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* SVG circle line tracing animation */
@keyframes trace {
  to { stroke-dashoffset: -900; }
}

/* Pulsing accent ring */
@keyframes pulseRing {
  0% { box-shadow: 0 0 0 0 rgba(255, 122, 26, 0.55); }
  70% { box-shadow: 0 0 0 18px rgba(255, 122, 26, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 122, 26, 0); }
}

/* Modal and content entry transition */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
```

### 5.2 Micro-Interactions & Touch Feedback
- **Tap Bounce Class (`.tap-bounce`)**:
  ```css
  .tap-bounce {
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease, box-shadow 0.2s ease;
    will-change: transform;
  }
  .tap-bounce:active {
    transform: scale(0.94);
  }
  ```
- **App Pill Button Class (`.app-pill-btn`)**:
  ```css
  .app-pill-btn {
    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: transform, box-shadow;
  }
  .app-pill-btn:active {
    transform: scale(0.95);
  }
  ```
- **Glassmorphism Nav Class (`.glass-nav`)**:
  ```css
  .glass-nav {
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }
  ```

---

## 6. Iconography & Badging System

### 6.1 Lucide Icons Standard Sizes
- `10px` / `11px` — Micro badge icon inside pill
- `13px` / `14px` — Small button icon / inline link icon
- `15px` / `16px` — Standard action button icon
- `18px` / `20px` — Card header icon / nav tab icon
- `22px` / `24px` — Featured workflow central step icon
- `38px` — Quote decorative watermark icon

### 6.2 Brand Icon Containers
- `w-8 h-8` or `w-9 h-9` rounded-full or rounded-xl box
- Dark background (`#17130F`) with cream/orange icon, or brand-colored container (`#FF0000` for video branding)

---

## 7. Home Page Components Specification

### 7.1 Navigation Bar (`Nav.jsx`)
- **Desktop Navbar**:
  - Sticky container at `top-0`, `z-40`, pill shape (`rounded-full`), glassmorphic background (`backdrop-blur-md`).
  - Left brand logo: circular avatar image with 2px orange border + title text.
  - Center nav items: uppercase links with active bottom line indicator bar (`h-[2px] bg-[#FF7A1A]`).
  - Right controls: Theme toggle button (`w-8 h-8 rounded-full border`), Blog button (tinted pill), Academy pill button (`bg-[#17130F] text-[#F6F1E6] border border-orange-500/35`).
- **Mobile Bottom Navigation Bar**:
  - Fixed at `bottom-0`, `z-50`, height `52px`, 5 tab items (Home, Skills, Services, Projects, Contact/Profile).
  - Displays icon (`18px`) + label (`8.5px font-bold`). Active tab shows top orange accent bar (`h-[2px]`).

### 7.2 Hero Section (`Hero.jsx`)
- **Top Badge**: App pill container with pulsing dot + star icon + uppercase availability text.
- **Main Headline**: `text-2xl sm:text-5xl md:text-6xl font-black tracking-tight`. Highlights key words in `COLORS.orange`.
- **Center Avatar**: `w-44 h-44 sm:w-72 sm:h-72 md:w-80 md:h-80` circular image with `4px` orange border (`#FF7A1A`) and `floatY 5s` animation.
- **Desktop 3-Column Widget Structure**:
  - Left column: Social icons row (`w-9 h-9` rounded dark buttons) + stat counter (`15+ Projects Shipped`).
  - Right column: Video channel subscription card (red brand icon, subscriber count, orange subscribe button) + quote string.
- **Action Buttons**: Dual pill CTAs (`See My Work` orange pill with `ArrowRight` + `Start a Project` outline pill with `Sparkles`).

### 7.3 Marquee Ticker (`Marquee.jsx`)
- Full-width ticker bar with `#17130F` background, `1.5px` solid orange borders top & bottom.
- Continuous CSS animation `marquee 22s linear infinite`.
- Repeated text items separated by `Sparkles` icon (`color: #FF7A1A`).

### 7.4 Skills Showcase (`SkillsShowcase.jsx`)
- **Category Filter Tabs**: Horizontal scrollable list of pill buttons (`Core Languages`, `Frontend`, `Backend`, `AI & Agents`, `Database`, `DevOps & Tools`). Active tab switches to `bg-[#17130F] text-[#F6F1E6]`.
- **Skill Cards Grid**: Responsive grid of `rounded-2xl` cards containing brand icon in `w-9 h-9` container, technology title, and category badge. Subtle background color glow on hover.
- **Bottom Summary Bar**: Glassmorphic bar showing total count, production-verified tag, and high performance indicator.

### 7.5 Services Section (`Services.jsx` & `ServiceRow.jsx`)
- **Section Header**: Includes section badge, headline, and `Start a Project` action button.
- **Accordion Rows (`ServiceRow.jsx`)**:
  - Rounded `2.5xl` card (`rounded-2xl sm:rounded-3xl`).
  - Default state: White background, ink text, border `rgba(23,19,15,0.06)`.
  - Expanded state: Inverts to `background: #17130F`, `color: #F6F1E6`, border `rgba(255,122,26,0.35)`.
  - Plus icon rotates `225deg` on toggle. Grid height expands smoothly (`grid-template-rows 0.45s cubic-bezier(0.22,1,0.36,1)`). Displays tag pills and description.

### 7.6 Featured Projects (`WorkShowcase.jsx` & `ProjectCard.jsx`)
- **Category Filter**: Category pills (`All`, `AI Systems`, `SaaS`, etc.).
- **Project Cards (`ProjectCard.jsx`)**:
  - `rounded-2xl sm:rounded-3xl` container with hover elevation (`translateY(0)` -> `translateY(-4px)` with shadow `0 16px 36px rgba(23,19,15,0.12)`).
  - Icon in `w-12 h-12` dark container (`bg-[#17130F]`).
  - Status badge: `Live App` (emerald green with pulsing green dot) or `Shipped` (orange badge).
  - Stack tags: Small pill tags in `creamDark` background.
  - Action row: Dual action buttons (`View Code` GitHub link + `Live Demo` / `Details` button with `ArrowUpRight` icon that shifts top-right on hover).

### 7.7 Interactive Workflow Loop (`WorkflowShowcase.jsx`)
- **Visual Orbit Circle (Left Column)**:
  - SVG 300x300 viewBox with circular orbit line (`strokeDasharray="14 886"`, `trace` animation).
  - 5 interactive step nodes clickable around orbit path. Active node glows with orange drop shadow.
  - Center pulsing badge displaying active step number and current icon.
- **Detail Card & Step Selectors (Right Column)**:
  - Fixed-height step detail card (`rounded-3xl`, orange border tint) displaying active step title and description.
  - 5 step selector buttons below card with step numbers. Auto-cycles through steps every `2.8s` (pauses on hover).

### 7.8 About Section (`About.jsx`)
- **Dark Theme Palette**: Background `#17130F`, text `#F6F1E6`.
- **Avatar Frame**: `rounded-3xl` card with bold orange outer background (`#F37121`) framing the portrait image.
- **Quick Stat Badges**: Pill badges showing field entry date, shipping duration, and community reach.
- **Expandable Deep Details Card**: Smooth max-height expand box (`max-h-0` to `max-h-[800px]`) detailing core philosophy and technical pillars.
- **CTA Row**: `Read More About Me` primary orange pill button + `Get In Touch` link.

### 7.9 Testimonials Carousel (`TestimonialsCarousel.jsx`)
- **Dark Navy Glass Card**: `background: #0B1120`, border `rgba(255,122,26,0.25)`, backdrop blur. Ambient orange glow orb behind card (`blur-[120px]`).
- **Rating Display**: 5 gold stars (`Star` filled `amber-400`).
- **Screenshot Proof Card**: Expandable feedback screenshot thumbnail with `Eye` click indicator, opening a high-resolution lightbox modal.
- **Author Profile**: Author avatar (`w-14 h-14 rounded-2xl` with orange border), verified checkmark icon (`UserCheck`), role and company.
- **Controls**: Prev/Next circular arrow buttons (`ChevronLeft` / `ChevronRight`) + Dot pagination indicators. Auto-slides every 5 seconds.

### 7.10 Footer (`Footer.jsx`)
- **Top Accent Line**: `h-1 w-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600`.
- **Background**: Deep dark navy `#0A0F1D`.
- **Column 1 (Brand)**: Profile logo, title, tagline, availability status pill with pulsing green dot.
- **Column 2 (Navigation)**: 2-column grid of page links with Lucide icons.
- **Column 3 (Contact)**: Direct email card, `Work With Me` orange action button, and 4 brand social icons (`GitHub`, `LinkedIn`, `YouTube`, `Facebook`).
- **Bottom Bar**: Copyright text, Privacy policy link, Admin studio link.

---

## 8. Summary Checklist for AI Agents Recreating This Design

1. Set up color variables for `#F6F1E6` (Cream), `#17130F` (Ink), `#FF7A1A` (Orange), `#6E6656` (Muted), and `#FFFFFF` (White).
2. Configure text selection highlight in CSS (`::selection` with background `#FF7A1A` and text `#17130F`).
3. Apply `glass-nav`, `tap-bounce`, and `app-pill-btn` utility classes for hardware-accelerated micro-interactions.
4. Implement sticky glassmorphism header navigation on desktop and fixed icon bar on mobile (`<768px`).
5. Maintain section max widths at `max-w-6xl` (`1152px`) with section paddings `py-12 sm:py-20`.
6. Enforce rounded pill buttons (`rounded-full`) for CTAs and `rounded-2xl` / `rounded-3xl` for cards and modals.
7. Use high-contrast text color logic in light vs dark mode to prevent low-contrast text.
