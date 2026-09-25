# Aniket Kumar · Portfolio

A responsive React + Vite portfolio. Project information and profile links are in `src/data.js`; visual project panels are lightweight CSS illustrations, not screenshots of deployed sites. Live/source actions remain unavailable until verified URLs are added.

## Run locally

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

Vite writes the static site to `dist/`.

## Update the portfolio

Edit `src/data.js` to change the name, email, GitHub and LinkedIn URLs, resume PDF path, projects, verified live/source URLs, project technologies, skills, and services. Put a resume PDF in `public/` and set `resume` to `/resume.pdf`. A project is marked LIVE automatically when its `liveUrl` is set. Keep the URL blank until it is verified. Update the intro/about copy and page metadata in `src/main.jsx` and `index.html`.

The contact form uses a `mailto:` draft and requires `profile.email`. It does not use an email service or backend. No environment variables are required.

## Deploy

**Vercel:** Import the repository in Vercel; use build command `npm run build` and output directory `dist` (Vite is detected automatically).

**Netlify:** Import the repository in Netlify; use build command `npm run build` and publish directory `dist`.
