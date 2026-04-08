# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**diffractwd.com** — Product website for DiffractWD, an X-ray diffraction analysis tool.

**Repository:** `vreshch/diffractwd.com`
**Default Branch:** `master`
**Framework:** Next.js 15 App Router

## Development Commands

```bash
npm install              # Install dependencies
npm run dev              # Start Next.js dev server
npm run build            # Production build
npm test                 # Run Vitest unit tests
npm run test:e2e         # Run Playwright E2E tests
npm run lint             # Next.js ESLint
npm run format:check     # Prettier check
npm run verify           # Full pipeline: type-check + lint + build + test
```

## Architecture

```
src/
├── app/                 # Next.js App Router pages and layouts
├── components/          # React components
├── data/                # Static data and content
├── lib/                 # Utilities and helpers
└── test/                # Test utilities
```

### Key Patterns

- **Server Components** by default, `'use client'` only when needed
- **Tailwind CSS v4** with `class-variance-authority` for variants
- **Static-first** — marketing content with minimal client-side JS
- Port 3001 in production

### Key Dependencies

- Next.js 15, React 19, Tailwind CSS v4
- `sharp` — Image optimization
- `class-variance-authority`, `clsx`, `tailwind-merge` — Styling utilities

## Testing

- **Unit:** Vitest — component and utility tests
- **E2E:** Playwright — page navigation and visual tests

## Deployment

Docker container deployed via Docker Swarm behind Traefik. **Never deploy manually** — CI handles it on merge to master.

## Standards

See [root CLAUDE.md](../../CLAUDE.md) for tech standards and [showcase CLAUDE.md](../CLAUDE.md) for portfolio workflow rules.
