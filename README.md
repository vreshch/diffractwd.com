# Website for DiffractWD [diffractwd.com](https://diffractwd.com)

[![Deploy to Production](https://github.com/vreshch/diffractwd.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/vreshch/diffractwd.com/actions/workflows/deploy.yml)
[![PR Validation](https://github.com/vreshch/diffractwd.com/actions/workflows/pr-validation.yml/badge.svg)](https://github.com/vreshch/diffractwd.com/actions/workflows/pr-validation.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Website for the DiffractWD application — a free and open-source tool for powder diffraction analysis and visualization.

## Technologies

* React 19 & TypeScript
* Next.js 15 (App Router)
* Tailwind CSS 4
* Vitest & Playwright for testing
* Docker with Traefik reverse proxy
* GitHub Actions CI/CD

## Quick Start

Requires Node.js 22+.

```bash
npm install
npm run dev
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm start` | Start production server (port 3001) |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm test` | Run unit tests (Vitest) |
| `npm run test:watch` | Run unit tests in watch mode |
| `npm run test:e2e` | Run E2E tests (Playwright) |
| `npm run test:e2e:ui` | Run E2E tests with UI |
| `npm run verify` | Full verification (type check, lint, build, test) |

## Docker

Build and run locally:

```bash
docker build -t diffractwd-com:latest .
docker run -p 3001:3001 diffractwd-com:latest
```

Production deployment uses Docker Swarm with Traefik for automatic HTTPS.

## Contacts

* Website: [vreshch.com](https://vreshch.com)
* Email: vreshch@gmail.com
