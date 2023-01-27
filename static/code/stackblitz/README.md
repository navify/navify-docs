# Stackblitz

This directory contains the source files for generating the individual framework targets for a playground examples. The contents of the files will be loaded and injected into the Stackblitz example that is opened from the Playground.

## HTML

| File         | Description                                                        |
| ------------ | ------------------------------------------------------------------ |
| `index.html` | Main template file with CDN link to latest `@navify/core` release. |
| `index.ts`   | Defines the Rindo hydrated bundle for Navify.                    |

## React

| File       | Description                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------- |
| `app.tsx`  | Imports required Navify styles and `setupNavifyReact()` function to initialize web components. |
| `index.js` | Boilerplate to render a React app.                                                             |

## Kdu

| File             | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| `App.kdu`        | Main Kdu component that wraps each example in `nav-app`.      |
| `index.html`     | The HTML template to create an element to mount Kdu to.       |
| `main.js`        | Initializes Navify Kdu and imports global styles.             |
| `package.json`   | Project specific dependencies to create an example with Wite. |
| `wite.config.js` | Wite configuration file.                                      |
