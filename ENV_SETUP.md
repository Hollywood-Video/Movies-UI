# Environment Variables Setup

This document describes how to configure environment variables for the Cinedex UI application.

## Quick Start

1. Copy the example file to create your local environment file:
   ```bash
   cp .env.example .env
   ```

2. Update the values in `.env` to match your local development environment

3. For production deployments, create a `.env.production` file with production values

## Environment Files

### `.env` (Local Development)
Used when running the development server with `npm start`.

**Example:**
```env
VITE_API_BASE_URL=https://localhost:9000/movie-svc
VITE_BASE_PATH=./
VITE_SOURCE_MAP=true
```

### `.env.production` (Production Builds)
Used when building for production with `npm run build -- --mode production`.

**Example:**
```env
VITE_API_BASE_URL=https://api.cinedex.com/movie-svc
VITE_BASE_PATH=./
VITE_SOURCE_MAP=false
```

## Available Variables

### `VITE_API_BASE_URL`
**Required**

The base URL for the movie service backend API.

- **Development:** `https://localhost:9000/movie-svc`
- **Production:** Your production API endpoint (e.g., `https://api.cinedex.com/movie-svc`)

### `VITE_BASE_PATH`
**Optional** (defaults to `./`)

The base public path when the application is served. Use this if you're serving the app from a subdirectory.

- **Root path:** `./`
- **Subdirectory:** `/cinedex/` or `/ui/`

### `VITE_SOURCE_MAP`
**Optional** (defaults to `false`)

Controls whether source maps are generated during the build process.

- **Development:** `true` (helpful for debugging)
- **Production:** `false` (reduces bundle size and protects source code)

## Important Notes

1. Environment files (`.env`, `.env.production`) are **NOT** committed to git for security reasons
2. Use `.env.example` as a template for creating your environment files
3. All environment variables must be prefixed with `VITE_` to be exposed to the application
4. Changes to environment variables require restarting the dev server or rebuilding the application
5. The application accesses the API URL at runtime via the global `__API_BASE_URL__` constant

## Scripts

- `npm start` - Runs dev server (uses `.env`)
- `npm run build` - Builds for production (uses default mode)
- `npm run build -- --mode production` - Builds with `.env.production`
- `npm run prod` - Preview production build locally (uses `.env.production`)

## CI/CD

In the GitHub Actions workflow, the `.env.production` file is automatically copied from the server's secrets directory before building:

```yaml
- name: 🔐 Get Secrets
  run: cp /home/felipe/secrets/cinedex-ui/production ${{ github.workspace }}/.env.production
```

Make sure the production secrets file exists at `/home/felipe/secrets/cinedex-ui/production` on your deployment server.
