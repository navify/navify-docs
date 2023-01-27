---
title: Navify Packages
sidebar_label: Packages & CDN
---

<head>
  <title>Navify Framework Packages: CDN, Kdu, and React</title>
  <meta
    name="description"
    content="View our different packages that can be used to quickly start using Navify Framework or Navicons CDN in a test environment, Kdu, React, or none at all."
  />
</head>

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

:::note
This does not install React or any other frameworks. This allows use of the Navify Framework core components without a framework.
:::

## Navify + React

To add Navify Framework to an already existing React project, install the `@navify/react` and `@navify/react-router` package.

```shell
$ npm install @navify/react
$ npm install @navify/react-router
```

### CSS

To include the necessary CSS in a React project, add the following to the root App component.

```javascript
/* Core CSS required for Navify components to work properly */
import '@navify/react/css/core.css';

/* Basic CSS for apps built with Navify */
import '@navify/react/css/normalize.css';
import '@navify/react/css/structure.css';
import '@navify/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@navify/react/css/padding.css';
import '@navify/react/css/float-elements.css';
import '@navify/react/css/text-alignment.css';
import '@navify/react/css/text-transformation.css';
import '@navify/react/css/flex-utils.css';
import '@navify/react/css/display.css';
```

## Navify + Kdu

To add Navify Framework to an existing Kdu project, install the `@navify/kdu` and `@navify/kdu-router` packages.

```shell
npm install @navify/kdu @navify/kdu-router
```

After that, you will need to install the `NavifyKdu` plugin in your Kdu app.

**main.js**

```javascript
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

```javascript
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

```javascript
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

From here, you can learn about how to develop with Navify Framework in our [Navify Kdu Quickstart Guide](https://navifyframework.web.app/docs/kdu/quickstart).

## Navicons CDN

Navicons is packaged by default with the Navify Framework, so no installation is necessary if you're using Navify. To use Navicons without Navify Framework, place the following `<script>` near the end of your page, right before the closing `</body>` tag.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/navicons/dist/navicons/navicons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/navicons/dist/navicons/navicons.js"></script>
```

:::note
See [Navicons usage](https://navify.web.app/navicons/usage) for more information on using Navicons.
:::
