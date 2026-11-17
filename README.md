# Portfolio V2

Source for [abisalde.dev](https://abisalde.dev).

## Quick start

- Node 22.22 or newer, Yarn 1
- `yarn install`
- `yarn dev` and open `http://localhost:5173`
- `yarn test`, `yarn lint`, `yarn build`

## Design

One page that combines four directions:

- **Fieldbook**: a fixed navigation rail on desktop, real project screenshots, and a small motion study (Spring, Glide, Snap) that respects reduced motion.
- **Signal**: the condensed `ABISALDE.` wordmark over a 12-column grid, a numbered index of more work, and a full-width mint call to action.
- **Inspector**: an **Inspect layout** switch that shows the grid and dev-tools box models with live sizes. The About section lists the facts as a CSS rule, and private projects show their architecture as a Layers panel.
- **Handset**: on phones, the rail becomes an app-style tab bar, and the Expo Snack demos run inside phone frames.

Tokens live in `src/styles/index.css` (`@theme`). Fonts are self-hosted through Fontsource: Archivo (variable width), Instrument Serif and JetBrains Mono.

Content lives in `src/data/`. Years of experience are counted from `CAREER_START_YEAR` in `src/data/profile.ts`.

## Tools

- [React](https://react.dev/) and [React Router](https://reactrouter.com/)
- [Vite](https://vite.dev/) and [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/)
- [Calendly](https://calendly.com/)
