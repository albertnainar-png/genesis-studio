# Genesis Studio

**One idea. Endless creation.** Genesis Studio is a creative workspace where ELINA, your AI Creative Producer, helps turn a starting idea into a structured creative brief and production direction.

## Current preview

This repository currently delivers the first usable, browser-based MVP:

- Responsive workspace dashboard
- Video, Music, Artwork and Voice project types
- ELINA idea-to-brief workflow (local deterministic brief shaping; no paid API)
- Audience, mood and format controls
- Generated concept, hook, story/production beats and deliverables
- Project history saved in browser localStorage
- Search projects, copy a brief and export Markdown
- No account or server required for this preview

## Important scope boundary

This MVP does **not** generate finished audio, video, images or cloned voices. It creates production-ready creative direction that can be taken into external production tools. ELINA's current brief builder runs locally in the browser and should not be described as a connected large language model.

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Deploy

The app is a static Vite site and can be deployed to GitHub Pages, Cloudflare Pages, Netlify or Render Static Sites. Set the build command to `npm run build` and publish directory to `dist`. For GitHub Pages, ensure the Vite `base` path matches the repository path and the workflow uploads the `dist` directory.

## Data and privacy

Project data is stored in the current browser's localStorage. Clearing browser data removes those projects. No authentication, cloud sync, server storage or external AI provider is configured in this MVP.

## Roadmap

1. **MVP (this branch):** stable creative brief workflow and local project library.
2. **Provider layer:** optional, explicitly configured AI providers with cost controls and clear data-consent boundaries.
3. **Production studios:** connect video, music, artwork and voice tools through supported provider APIs.
4. **Accounts and sync:** secure sign-in, cloud project storage and cross-device continuity.
5. **Release:** accessibility, end-to-end testing, deployment verification and user feedback.

## Product principle

ELINA acts as a creative producer, not a button that promises media generation it cannot perform. Every capability shown in the interface must reflect a working, verified workflow.
