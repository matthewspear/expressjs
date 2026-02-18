# ExpressJS API Example

This example starts an [ExpressJS](https://expressjs.com/) server written in [TypeScript](https://www.typescriptlang.org/).

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/n_2mnn?referralCode=matt)

## Features

- Express 5
- TypeScript
- Security headers via [helmet](https://helmetjs.github.io/)
- CORS enabled

## How to use

- Install dependencies `pnpm install`
- Copy `.env.example` to `.env` (optional, defaults to port 3333)
- Start the development server `pnpm dev`
- Build for production `pnpm build`

## Notes

The server returns a healthcheck `status: "ok"` payload in JSON at the root. The server code is located in `src/index.ts`.

A versioned API route is available in `src/api.ts` with an example endpoint at `/api/v1/hello`.

Express 5 handles async route handlers natively — no wrapper needed.

## Railway

Set `NODE_ENV=production` in your Railway service variables. Railway does not set this automatically.

## Thanks

- [Faraz Patankar](https://github.com/FarazPatankar) / Railway team for the [original template](https://github.com/railwayapp-templates/expressjs)
