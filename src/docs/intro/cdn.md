---
title: Install with CDN
outline: deep
---

# Navify Packages

Navify provides different packages that can be used to quickly get started using Navify Framework or Navicons in a test environment, Kdu, any other framework, or none at all.

## Navify Framework CDN

Navify Framework can be included from a CDN for quick testing in a [Plunker](https://plnkr.co/), [Codepen](https://codepen.io), or any other online code editor!

It's recommended to use [jsdelivr](https://www.jsdelivr.com/) to access the Framework from a CDN. To get the latest version, add the following inside the `<head>` element in an HTML file, or where external assets are included in the online code editor:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@navify/core/dist/navify/navify.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@navify/core/dist/navify/navify.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@navify/core/css/navify.bundle.css" />
```

With this it's possible to use all of the Navify Framework core components without having to install a framework. The CSS bundle will include all of the Navify [Global Stylesheets](../layout/global-stylesheets).

:::warning Note
This does not install Kdu or any other frameworks. This allows use of the Navify Framework core components without a framework.
:::

## Navify + Kdu

To add Navify Framework to an existing Kdu project, install the `@navify/kdu` and `@navify/kdu-router` packages.

```sh
npm install @navify/kdu @navify/kdu-router
```

After that, you will need to install the `NavifyKdu` plugin in your Kdu app.

**main.js**

```js
import { NavifyKdu } from '@navify/kdu';

import App from './App.kdu';
import router from './router';

const app = createApp(App).use(NavifyKdu).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
```

Be sure to mount your app once `router.isReady()` has resolved.

### Routing

When setting up routing in your Kdu app, you will need to import your dependencies from `@navify/kdu-router` instead of `kdu-router`.

**router/index.js**

```js
import { createRouter, createWebHistory } from '@navify/kdu-router';

const routes = [
  // routes go here
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

### CSS

To include the necessary CSS in a Kdu project, add the following to your `main.js` file.

```js
/* Core CSS required for Navify components to work properly */
import '@navify/kdu/css/core.css';

/* Basic CSS for apps built with Navify */
import '@navify/kdu/css/normalize.css';
import '@navify/kdu/css/structure.css';
import '@navify/kdu/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@navify/kdu/css/padding.css';
import '@navify/kdu/css/float-elements.css';
import '@navify/kdu/css/text-alignment.css';
import '@navify/kdu/css/text-transformation.css';
import '@navify/kdu/css/flex-utils.css';
import '@navify/kdu/css/display.css';
```

<!-- From here, you can learn about how to develop with Navify Framework in our [Navify Kdu Quickstart Guide](../kdu/quickstart). -->

## Navicons CDN

Navicons is packaged by default with the Navify Framework, so no installation is necessary if you're using Navify. To use Navicons without Navify Framework, place the following `<script>` near the end of your page, right before the closing `</body>` tag.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/navicons/dist/navicons/navicons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/navicons/dist/navicons/navicons.js"></script>
```
