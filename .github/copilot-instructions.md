# Copilot Instructions for Personal Portfolio

## Project Overview

This is a personal portfolio website for Ayush Sikarwar, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and GSAP.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode preferred)
- **Styling**: Tailwind CSS with glassmorphism effects
- **Animations**: Framer Motion + GSAP ScrollTrigger
- **Deployment**: Vercel

## Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with global styles/fonts
│   ├── page.tsx            # Main page composing all sections
│   └── api/contact/        # Contact form API route
├── components/             # React components (one per section)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── data/
    └── projects.json       # Project data (title, description, tags, links)
```

## Coding Guidelines

- Use **TypeScript** for all new files; define explicit types/interfaces for props and data.
- Use **Tailwind CSS** utility classes for styling; avoid inline styles unless required for animation values.
- Follow the existing **dark theme** with neon accents (electric blue `#3B82F6` / purple `#8B5CF6`).
- Prefer **Framer Motion** for entrance/exit animations on React components.
- Use **GSAP ScrollTrigger** for scroll-driven animations tied to viewport position.
- Keep components focused — one component per section of the portfolio.
- Project data lives in `data/projects.json`; add new projects there rather than hardcoding them.
- The contact form uses an API route at `app/api/contact/`; keep server-side logic in route handlers.

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Design Principles

- Mobile-first responsive design (mobile → tablet → desktop).
- Maintain glassmorphism aesthetic: semi-transparent backgrounds, backdrop blur, subtle borders.
- Smooth, performant animations — avoid heavy JS-driven animations on mobile.
- Accessibility: use semantic HTML elements and ensure sufficient color contrast.
