### SAiNTS 2026 Conference Site

A modern, animated single-page site for the **SAiNTS 2026** conference, built with React, Vite, and Tailwind CSS. It features an interactive hero grid, animated content sections, and a shimmering registration call-to-action.

---

## Features

- **Hero grid landing** with animated background and text (`GridComponent`)
- **About section** with key dates and conference overview (`AboutSection`)
- **Conference themes** section with two visually distinct tracks (`ConferenceThemes`)
- **Shimmering registration button** built as a reusable `ShimmerButton` component
- **Scroll progress bar** at the top of the page
- **Loading screen** with animated lines while the app initializes
- **Responsive layout** tuned for large screens and modern browsers

---

## Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS + utility classes
- **Animation**: Framer Motion, CSS keyframes
- **Icons**: `lucide-react`
- **Build tooling**: Vite with `@` path alias to `src`

---

## Getting Started

### Prerequisites

- **Node.js** 18+ recommended
- **npm** or **yarn** (examples below use npm)

### Installation

    # Install dependencies
    npm install

### Development

    # Start the dev server (default: http://localhost:3000)
    npm run dev

### Production Build

    # Build for production
    npm run build

    # Preview the production build
    npm run preview

---

## Project Structure (key files)

- `index.html` – Vite entry HTML
- `src/main.jsx` – React app bootstrap
- `src/App.jsx` – Main app layout (nav, hero grid, sections)
- `src/index.css` – Global styles / Tailwind setup

**Core components**

- `src/components/NavBar.jsx` – Fixed navigation with icon-based items
- `src/components/GridComponent.jsx` – Hero / landing grid with animated pattern
- `src/components/AboutSection.jsx` – About content and important dates card
- `src/components/ConferenceThemes.jsx` – Track 1 & Track 2 conference themes
- `src/components/LoadingLines.jsx` – Initial loading animation

**UI + utilities**

- `src/components/ui/ShimmerButton.tsx` – Reusable shimmering button
- `src/components/ui/scroll-progress-bar.jsx` – Scroll progress indicator
- `src/lib/utils.js` – `cn` utility for class name merging

**Config**

- `tailwind.config.js` – Tailwind configuration
- `vite.config.js` – Vite config with `@` alias → `src`

---

## ShimmerButton Usage

The `ShimmerButton` is a reusable call-to-action with a looping shimmer animation:

    import { ShimmerButton } from "@/components/ui/ShimmerButton";

    <ShimmerButton
      shimmerColor="#facc15"
      shimmerSize="0.05em"
      shimmerDuration="3s"
      borderRadius="100px"
      background="linear-gradient(135deg, #1d4ed8, #3b82f6, #6366f1)"
      className="w-full py-4 text-xl md:text-2xl font-medium"
    >
      Registration Form
    </ShimmerButton>

**Props** (in addition to normal `button` props):

- `shimmerColor?: string` – Highlight color of the shimmer
- `shimmerSize?: string` – Width of the shimmer band
- `shimmerDuration?: string` – Animation duration (e.g. `"3s"`)
- `borderRadius?: string` – Corner radius (e.g. `"100px"` for pill)
- `background?: string` – Background color or gradient
- `className?: string` – Extra Tailwind / CSS classes

---

## Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run preview` – Preview the production build
- `npm run lint` – Run the linter (if configured)

---

## Customization

- **Content**: Update text and dates in `AboutSection.jsx` and `ConferenceThemes.jsx`.
- **Navigation**: Adjust `navItems` in `App.jsx` to link to real sections or external pages.
- **Branding**: Tweak colors and typography via Tailwind classes and `tailwind.config.js`.
- **Animations**: Fine-tune Framer Motion props in the sections and hero for different motion styles.
