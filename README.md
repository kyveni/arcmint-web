# ArcMint

ArcMint is a frontend MVP for an AI-powered token analyzer and launchpad experience tailored for Robinhood Chain.

## Features

- Dark crypto-inspired landing experience
- Token analyzer interface with EVM address validation
- AI analysis result panel with safe fallbacks
- Launchpad preview section marked as coming soon
- Responsive mobile-first layout for Android-friendly browsing

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create your environment file:
   ```bash
   cp .env.example .env.local
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000

## Environment

The frontend reads the analysis endpoint from the environment variable `NEXT_PUBLIC_API_URL`.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
