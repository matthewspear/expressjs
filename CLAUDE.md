# Express.js Railway Template

Minimal Express 5 + TypeScript API starter for Railway deployment.

## Commands

- `pnpm dev` — start dev server with hot reload (tsx watch)
- `pnpm build` — compile TypeScript to `dist/`
- `pnpm start` — run production build

## Structure

- `src/index.ts` — entry point, loads env vars, starts server on PORT (default 3333)
- `src/api.ts` — Express app setup, middleware (helmet, cors, body parsers), routes

## Architecture

- **Express 5** — stable release with native async error handling in routes
- **Versioned API** — routes mounted at `/api/v1/` via Express Router
- **Middleware stack** — helmet (security headers) → cors → body parsers
- **Environment** — dotenv in development, Railway injects PORT in production
