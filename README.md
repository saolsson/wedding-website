# Wedding Website

A bare-bones wedding website built with React + Vite.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs static files to dist/
```

Edit the `details` object in `src/App.jsx` to change names, date, venue and RSVP email.

## Deploy

Pushes to `main` are built and deployed to GitHub Pages by `.github/workflows/deploy.yml`, served at https://spencerolsson.com (see `public/CNAME`).
