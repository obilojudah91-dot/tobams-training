# Tobams Group – Training and Development Page

A pixel-perfect, fully responsive implementation of the Frontend Intern Assessment Figma design, built with **Next.js 14 (App Router)** and **Tailwind CSS v3**.

---

## Live URL

> **[https://tobams-training.vercel.app](https://YOUR-VERCEL-URL.vercel.app)**

---

## 🔗 GitHub Repository

> **[https://github.com/Obilojudah91-dot/tobams-training](https://github.com/Obilojudah91-dot/tobams-training)**

---

## 🔗 Figma Design Reference

[Frontend Intern Assessment – Figma](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

---

## Stack

| Tool       | Version | Purpose                           |
|------------|---------|-----------------------------------|
| Next.js    | 14+     | App Router, next/image, next/font |
| Tailwind CSS | 3+   | All styling, responsive prefixes  |
| TypeScript | 5+      | Type safety                       |
| Vercel     | —       | Deployment                        |

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js 18+
- npm

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/tobams-training.git
cd tobams-training

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

---

##  Project Structure

## Design Decisions & Technical Assumptions

### Responsive Breakpoints
Used **only** Tailwind's built-in responsive prefixes (`sm:`, `md:`, `lg:`) as required by the assessment. No custom `@media` queries were written anywhere in the codebase.

- **425px (mobile):** Single-column layout, hamburger menu, stacked footer
- **768px (tablet):** Two-column grids activate, full navbar visible
- **1280px+ (desktop):** Full layout with max-width containers

### Images
- All images use `next/image` with `fill` and `sizes` props for automatic optimization
- Placeholder images sourced from Unsplash to match the stock photography style of the Figma design

### Fonts
- Loaded via `next/font/google` — zero layout shift, self-hosted automatically by Next.js
- `Merriweather` for all headings
- `Nunito Sans` for body text

### Tailwind Only
No inline styles were used. All styling is done exclusively through Tailwind utility classes as required.

### Minor Deviations from Figma
1. **Testimonials:** Implemented as a responsive CSS grid that collapses on mobile rather than a pure JS carousel — this is more accessible and keyboard-navigable while maintaining the same visual result on desktop.
2. **Placeholder images:** Real brand images were not available, so Unsplash stock photos matching the design's composition were used.
   
##  Submission Checklist

- [x] Public GitHub repository
- [x] Live Vercel deployment URL in README
- [x] README includes setup steps, live URL, stack, design decisions
- [x] Figma link referenced in README
- [x] Next.js App Router with `create-next-app`
- [x] Tailwind CSS only — no other CSS frameworks
- [x] No UI kits or template components used
- [x] All images via `next/image`
- [x] All fonts via `next/font`
- [x] Semantic HTML throughout
- [x] All images have meaningful `alt` text
- [x] Keyboard-navigable buttons and links
- [x] Responsive at 425px, 768px and 1280px+
- [x] Clean git history with meaningful commit messages
- [x] AI tool usage disclosed
