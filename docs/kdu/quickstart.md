---
title: Navify Kdu Quickstart
sidebar_label: Quickstart
---

<head>
  <title>Kdu QuickStart Global Component for Generating Navify Kdu Apps</title>
  <meta
    name="description"
    content="Our QuickStart guide covers the basics of both Kdu and Navify Framework global components to get apps up and running. Read how to easily generate Navify Kdu apps."
  />
</head>

## What is Navify Framework?

First off, if you're new here, welcome! Navify Framework is a free and open source component library for building apps that run on iOS, Android, Electron, and the Web. Write your app once using familiar technologies (HTML, CSS, JavaScript) and deploy to any platform.

Along with the UI components, Navify Framework also provides a command line tool for creating new apps, as well as deploying to the various platforms we support.

In this guide, we will go over the basics of both Kdu and Navify Framework, including any Navify Framework specific features. If you are familiar with Kdu, enjoy the guide and learn something new about Navify Framework. If you are not familiar with either, no worries! This guide will cover the basics and provide enough information to get an app up and running.

## Creating a project with the Navify CLI

To begin, let's install the latest version of the Navify CLI.

```shell
npm install -g @navify/cli@latest
```

From here, the global command `navify` will allow for the creation of a Kdu project with Navify Framework and any other dependencies. To create a new project, run the following command:

```shell
navify start myApp blank --type kdu
cd myApp
```

From here, we run `navify serve` and have our project running in the browser.

## Build your way with TypeScript or JavaScript

We love TypeScript at Navify, and have believed for quite some time now that it’s a great tool for building scalable apps. That said, we know how much the Kdu community values simplicity – in their tooling, languages, and more. In fact, it’s likely what drew you to Kdu in the first place. Start simple – then scale up as needed.

So, if you’d prefer to use JavaScript instead of TypeScript, you can. After generating an Navify Kdu app, follow these steps:

1. Remove TypeScript dependencies:

```shell
npm uninstall --save typescript @types/jest @typescript-eslint/eslint-plugin @typescript-eslint/parser @kdujs/cli-plugin-typescript @kdujs/eslint-config-typescript
```

2. Change all `.ts` files to `.js`. In a blank Navify Kdu app, this should only be `router/index.ts` and `main.ts`.

3. Remove `@kdujs/typescript/recommended` and `@typescript-eslint/no-explicit-any: ‘off’, `from `.eslintrc.js`.

4. Remove `Array<RouteRecordRaw>` from `router/index.js`.

5. Delete the `shims-kdu.d.ts` file.

6. Remove `lang="ts"` from the `script` tags in any of your Kdu components that have them. In a blank Navify Kdu app, this should only be `App.kdu` and `views/Home.kdu`.

## A look at a Kdu Component

The base of our app will be in the `src` directory, and the main entry point will be our `main.ts` file. If we open our project in a code editor and open `main.ts`, we should see the following:

```ts
import { createApp } from 'kdu';
import { NavifyKdu } from '@navify/kdu';

import App from './App.kdu';
import router from './router';

const app = createApp(App).use(NavifyKdu).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
```

So what is going on here? The first four lines are pulling in some dependencies. The `createApp` function lets us initialize our Kdu application, while `NavifyKdu` is a plugin that allows us to use Navify Framework in a Kdu environment.

The third import is the root component for our app, simply named `App`. This is our first Kdu component and will be used in the bootstrapping process for our Kdu app.

The fourth import gets our routing configuration. We will look at this more in depth later.

If we open `App.kdu` we should see the following:

```html
<template>
  <nav-app>
    <nav-router-outlet />
  </nav-app>
</template>

<script lang="ts">
  import { NavApp, NavRouterOutlet } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    name: 'App',
    components: {
      NavApp,
      NavRouterOutlet,
    },
  });
</script>
```

Let's break it down, starting with the first group of imports.

```tsx
import { NavApp, NavRouterOutlet } from '@navify/kdu';
```

To use a component in Kdu, you must first import it. So for Navify Framework, this means anytime we want to use a Button or a Card, it must be added to our imports. In the case of our `App` component, we are using `NavApp` and `NavRouterOutlet`. You can also register components globally if you find yourself importing the same components repeatedly. This comes with performance tradeoffs that we cover in [Optimizing Your Build](#optimizing-your-build).

From there, let's look at the template.

```html
<template>
  <nav-app>
    <nav-router-outlet />
  </nav-app>
</template>
```

All Kdu components must have a `<template>`. Inside of there, we place our `NavApp` and `NavRouterOutlet` components.

Finally, let's look at the component definition:

```tsx
import { NavApp, NavRouterOutlet } from '@navify/kdu';
import { defineComponent } from 'kdu';

export default defineComponent({
  name: 'App',
  components: {
    NavApp,
    NavRouterOutlet,
  },
});
```

Kdu 3 offers a new `defineComponent` function when creating components for improved tooling support, and we are going to use that here. We first define the name of the component, and then we supply the components that we will use in our template.

There are several arguments you can supply here such as `methods`, `setup` and more. This is explained as part of Kdu's [Composition API Documentation](https://kdu-js.web.app/guide/extras/composition-api-faq.html#why-composition-api).

## Initializing the router

Navify Kdu uses the [kdu-router](https://kdujs-router.web.app/) dependency, so if you are already familiar with Kdu Router, you will be able to apply what you know to navigation in Navify Kdu. Let's take a look at the router configuration we mentioned before. In `router/index.ts`, you should see something similar to the following:

```tsx
import { createRouter, createWebHistory } from '@navify/kdu-router';
import { RouteRecordRaw } from 'kdu-router';
import Home from '@/views/Home.kdu';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

:::note
This example is using the Navify Kdu Blank starter application, so your actual routes may look a bit different.
:::

The setup here is the same as if you were using `kdu-router` directly, but instead you need to import dependencies such as `createRouter` and `createWebHistory` from the `@navify/kdu-router` package.

After importing our dependencies, we can declare our routes in the `routes` array. From there, we can create a router instance and provide it with our routes and the type of history we want to use.

With Navify Kdu, lazy loading works right out of the box. Instead of importing our `Home` component, we could also do:

```tsx
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.kdu'),
  },
];
```

Now, you might be wondering: Why do we use `@` when describing the path to our components? The `@` symbol is a shortcut we can use to describe paths relative to the `src` directory. This is useful if we are trying to reference a component while in a file several folders deep. Instead of doing `'../../../views/Home.kdu'`, we could simply do `'@/views/Home.kdu'`.

## A component with style

Now the `App` component does not really have a lot to modify here. It is a basic example of a container component. With the router logic set, all it is responsible for is to render a component that matches the given URL route. Since we already have one component/router setup, let's go ahead and modify our `Home` component.

```html
<template>
  <nav-page>
    <nav-header :translucent="true">
      <nav-toolbar>
        <nav-title>Blank</nav-title>
      </nav-toolbar>
    </nav-header>

    <nav-content :fullscreen="true">
      <nav-header collapse="condense">
        <nav-toolbar>
          <nav-title size="large">Blank</nav-title>
        </nav-toolbar>
      </nav-header>

      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>
          Start with Navify
          <a target="_blank" rel="noopener noreferrer" href="https://navifyframework.web.app/docs/components"
            >UI Components</a
          >
        </p>
      </div>
    </nav-content>
  </nav-page>
</template>

<script lang="ts">
  import { NavContent, NavHeader, NavPage, NavTitle, NavToolbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    name: 'Home',
    components: {
      NavContent,
      NavHeader,
      NavPage,
      NavTitle,
      NavToolbar,
    },
  });
</script>

<style scoped>
  #container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  #container strong {
    font-size: 20px;
    line-height: 26px;
  }

  #container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
  }

  #container a {
    text-decoration: none;
  }
</style>
```

Much like the `App` component we started with, we have some imports for specific Navify Framework components, an import from Kdu, the Kdu component, and styles to go along with our component.

For our styles, notice that we have specified our styles to be `scoped`. This means that the styles we write here will only apply to this component. This is useful for preventing styles from leaking out of a component and affecting other parts of your application. We strongly recommend using `scoped` styles for Navify Kdu applications.

`NavPage` is the base component for all pages (a component with a route/URL), and includes some common building blocks of a full-screen component, like header, title, and content components.

:::note
When creating your own pages, do not forget to have `NavPage` be the root component for them. Having `NavPage` be the root component is important because it helps ensure transitions work properly as well as provides the base CSS the Navify Framework components rely on.
:::

`NavHeader` is a component meant to exist at the top of the page. It does not do much by itself, aside from handling some flexbox-based layout. It is meant to hold components, like `NavToolbar` or `NavSearchbar`.

`NavContent` is, as its name suggests, the main content area for our page. It is responsible for providing a scrollable content that users will interact with, plus any scroll events that could be used in an app.

Our current content is relatively simple, but does not contain anything that could be used in a real app, so let's change that.

:::note
For brevity, we are excluding repeating parts of our component, like the function declaration or import statements from other components.
:::

```html
<template>
  <nav-page>
    ...
    <nav-content>
      <nav-list>
        <nav-item>
          <nav-checkbox slot="start"></nav-checkbox>
          <nav-label>
            <h1>Create Idea</h1>
            <nav-note>Run Idea By Brandy</nav-note>
          </nav-label>
          <nav-badge color="success" slot="end"> 5 Days </nav-badge>
        </nav-item>
      </nav-list>
    </nav-content>
  </nav-page>
</template>
```

Here in our `NavContent`, we are adding an `NavList` and a much more involved `NavItem` component. Let's look at `NavItem` as it is the centerpiece here.

```html
<nav-item>
  <nav-checkbox slot="start"></nav-checkbox>
  <nav-label>
    <h1>Create Idea</h1>
    <nav-note>Run Idea By Brandy</nav-note>
  </nav-label>
  <nav-badge color="success" slot="end"> 5 Days </nav-badge>
</nav-item>
```

Looking at our code, we have a special attribute called slot. This is key for letting the `NavItem` know where to place the `NavCheckbox` when it renders. This is not a Kdu API, but a web standards API. Additionally, this is different from the slots API you may recall from Kdu 2.

Let's look at another component from Navify Framework, FAB. Floating Action Buttons are a nice way to provide a main action that is elevated from the rest of an app. For this FAB, we will need three components: a FAB, a FAB Button, and an Icon.

```html
<template>
  <nav-page>
    <nav-content>
      <nav-list> ... </nav-list>

      <nav-fab vertical="bottom" horizontal="end" slot="fixed">
        <nav-fab-button>
          <nav-icon :icon="add"></nav-icon>
        </nav-fab-button>
      </nav-fab>
    </nav-content>
  </nav-page>
</template>

<script>
  import { add } from 'navicons/icons';

  ...

  export default defineComponent({
    name: 'Home',
    ...,
    setup() {
      return {
        add
      }
    }
  })
</script>
```

On our main `NavFab`, we are setting its positioning with the vertical and horizontal attributes. We are also setting the render location to "fixed" with the slot attribute. This will tell `NavFab` to render outside of the scrollable content in `NavContent`.

Now let's wire up a click handler to this. When clicking the FAB button, we want to navigate to a new page (which we will create in a moment). To do this, we will need to get access to Kdu Router's navigation API. This can be done by importing `useRouter` from the `kdu-router` package.

```html
<template>
  <nav-page>
    <nav-content>
      <nav-list> ... </nav-list>

      <nav-fab vertical="bottom" horizontal="end" slot="fixed">
        <nav-fab-button @click="() => router.push('/new')">
          <nav-icon :icon="add"></nav-icon>
        </nav-fab-button>
      </nav-fab>
    </nav-content>
  </nav-page>
</template>

<script>
  import { add } from 'navicons/icons';
  import { useRouter } from 'kdu-router';

  ...

  export default defineComponent({
    name: 'Home',
    components: {
      NavContent,
      NavFab,
      NavFabButton,
      NavHeader,
      NavIcon,
      NavPage,
      NavTitle,
      NavToolbar
    },
    setup() {
      return {
        router: useRouter(),
        add
      }
    }
  });
</script>
```

In our component file, we are importing the `useRouter` function. When called, this function injects the router dependency into the component. It gives us access to the history API from Kdu Router, allowing us to push a new route onto the navigation stack. On our `NavFabButton`, we can add a click handler, and just call `router.push` and pass in the new route. In this case, we will navigate to `new`.

```html
<nav-fab-button @click="() => router.push('/new')"> ... </nav-fab-button>
```

## Creating a new Route

Now that we have the pieces in place to navigate in our app, we need to create a new component and add the new route to our router declaration. Let's open our `router/index.ts` file and add the new route.

```tsx
import { createRouter, createWebHistory } from '@navify/kdu-router';
import { RouteRecordRaw } from 'kdu-router';
import Home from '@/views/Home.kdu';
import NewItem from '@/views/NewItem.kdu';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/new',
    name: 'NewItem',
    component: NewItem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

With our router now having an entry for the route `/new`, we will create the component needed, `NewItem`. This will exist in `views/NewItem.kdu`.

Let's fill the `NewItem.kdu` file with some placeholder content for the moment.

```html
<template>
  <nav-page>
    <nav-header>
      <nav-toolbar>
        <nav-buttons slot="start">
          <nav-back-button></nav-back-button>
        </nav-buttons>
        <nav-title>New Item</nav-title>
      </nav-toolbar>
    </nav-header>
    <nav-content></nav-content>
  </nav-page>
</template>

<script lang="ts">
  import { NavBackButton, NavButtons, NavContent, NavHeader, NavPage, NavTitle, NavToolbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    name: 'NewItem',
    components: {
      NavBackButton,
      NavButtons,
      NavContent,
      NavHeader,
      NavPage,
      NavTitle,
      NavToolbar,
    },
  });
</script>
```

:::note
Each view must contain an `NavPage` component. Page transitions will not work correctly without it. See the [NavPage Documentation](navigation.md#navpage) for more information.
:::

The content here should look similar to the `Home` component. What is different here is the `NavBackButton` component. This is used to navigate back to the previous route. Seems easy enough, right? Ok, but what if we reload the page?

In this case, the in-memory history is lost, so the back button disappears. To address this, we can set the `default-href` attribute value to the URL we want to navigate to if there is no history.

```html
<nav-back-button default-href="/home"></nav-back-button>
```

Now, If there is no app history present, we will be able to navigate back to our home route.

## Calling Methods on Components

In order to call a method on any of the Navify Kdu components, you will first need to get a reference to the component instance. Next, you will need to access the underlying Web Component using `$el` and call the method.

In other framework integrations such as Navify React, this is not needed as any `ref` you provide is automatically forwarded to the underlying Web Component instance. We are unable to do the same thing here due to limitations in how Kdu manages refs.

```html
<template>
  <nav-content ref="content">
    <nav-button @click="scrollToBottom">Scroll to Bottom</nav-button>

    ...
  </nav-content>
</template>

<script lang="ts">
  import { NavButton, NavContent } from '@navify/kdu';
  import { defineComponent, ref } from 'kdu';

  export default defineComponent({
    components: { NavButton, NavContent },
    setup() {
      const content = ref();
      const scrollToBottom = () => {
        content.value.$el.scrollToBottom(300);
      };

      return { content, scrollToBottom };
    },
  });
</script>
```

## Adding Icons

Navify Kdu comes with [Navicons](https://navify.web.app/navicons/) pre-installed. There are a couple options developers have for using them in their application.

### Per-Component Imports

Per-Component Imports is the recommended approach to using Navicons. This involves importing the icon of your choice from the `navicons` package and passing it to your template:

```html
<template>
  <nav-page>
    <nav-content>
      <nav-icon :icon="heart"></nav-icon>
    </nav-content>
  </nav-page>
</template>

<script>
  import { heart } from 'navicons/icons';
  import { NavContent, NavPage } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    name: 'Icon',
    components: {
      NavContent,
      NavPage,
    },
    setup() {
      return { heart };
    },
  });
</script>
```

Let's break down what we are doing here. First, we are importing the `heart` icon from `navicons/icons`. This will load the appropriate SVG data for our icon.

Next, we pass the `heart` data to our template in the `setup` method.

Finally, we pass the icon data into the `nav-icon` component via the `icon` property.

Developers also have the option of setting different icons based upon the mode:

```html
<template>
  <nav-page>
    <nav-content>
      <nav-icon :ios="logoApple" :md="logoAndroid"></nav-icon>
    </nav-content>
  </nav-page>
</template>

<script>
  import { logoAndroid, logoApple } from 'navicons/icons';
  import { NavContent, NavPage } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    name: 'Icon',
    components: {
      NavContent,
      NavPage,
    },
    setup() {
      return { logoAndroid, logoApple };
    },
  });
</script>
```

Note that any icon names that are hyphenated should be written in camel case when importing.

### Global Imports

The other option is to import specific icons globally. This is not typically recommended as it will force icons to be loaded every time your application starts and can increase your application's initial chunk size.

That being said, there may be use cases when it makes sense to load specific icons globally:

**main.ts**

```tsx
import { addIcons } from 'navicons';
import { heart } from 'navicons/icons';

addIcons({
  heart: heart,
});
```

**Home.kdu**

```html
<template>
  <nav-page>
    <nav-content>
      <nav-icon icon="heart"></nav-icon>
    </nav-content>
  </nav-page>
</template>

<script>
  import { NavContent, NavPage } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    name: 'Home',
    components: {
      NavContent,
      NavPage,
    },
  });
</script>
```

In `main.ts`, the `addIcons` function lets us register icons globally and give it a string as a key. We then reference the icon by that key in our `Home` component.

## Optimizing Your Build

Kdu gives you several tools to fine tune your application. This section will cover the options that are most relevant to Navify Framework.

### Local Component Registration (Recommended)

By default, Navify Framework components are registered locally. With local registration, these components are imported and provided to each Kdu component you want to use them in. This is the recommended approach as it allows lazy loading and treeshaking to work properly with Navify Framework components.

The one downside to this approach is that it may be tedious to re-import your Navify Framework components multiple times. However, we feel that the performance benefits you receive in exchange are worth it.

Also note that locally registered components are not available in subcomponents. You will need to re-import the Navify Framework components you would like to use in your subcomponent.

Let's take a look at how local component registration works:

```html
<template>
  <nav-page>
    <nav-content>
      <Subcomponent></Subcomponent>
    </nav-content>
  </nav-page>
</template>

<script lang="ts">
  import { defineComponent } from 'kdu';
  import { NavContent, NavPage } from '@navify/kdu';
  import Subcomponent from '@/components/Subcomponent.kdu';

  export default defineComponent({
    components: { NavContent, NavPage, Subcomponent },
  });
</script>
```

In the example above, we are using the `NavPage` and `NavContent` components. To use them, we first import them from `@navify/kdu`. Then, we provide them to our Kdu component in the `components` option. From there, we can use the components in our template.

Note that since we are registering these components locally, neither `NavPage` nor `NavContent` will be available in `Subcomponent` unless we register them there as well.

For more information, see the <a href="https://kdu-js.web.app/guide/components/registration.html#local-registration" target="_blank" rel="noopener noreferrer">Local Registration Kdu Documentation</a>.

### Global Component Registration

The other option for registering components is to use global registration. Global registration involves importing the components you want to use in `main.ts` and calling the `component` method on your Kdu app instance.

While this makes it easier to add Navify Framework components to your Kdu app, global registration often is not ideal. To quote the Kdu documentation: "If you're using a build system like Webpack, globally registering all components means that even if you stop using a component, it could still be included in your final build. This unnecessarily increases the amount of JavaScript your users have to download".

Let's take a look at how global component registration works:

**main.ts**

```tsx
import { NavContent, NavifyKdu, NavPage } from '@navify/kdu';

const app = createApp(App).use(NavifyKdu).use(router);

app.component('nav-content', NavContent);
app.component('nav-page', NavPage);
```

**MyComponent.kdu**

```html
<template>
  <nav-page>
    <nav-content>
      <Subcomponent></Subcomponent>
    </nav-content>
  </nav-page>
</template>

<script lang="ts">
  import { defineComponent } from 'kdu';
  import Subcomponent from '@/components/Subcomponent.kdu';

  export default defineComponent({
    components: { Subcomponent },
  });
</script>
```

In the example above, we are using the `NavPage` and `NavContent` components. To use them, we first import them from `@navify/kdu` in `main.ts`. From there, we call the `component` method on our app instance and pass it the tag name as well as the component definition. After we do that, we can use the components in the rest of our application without having to import them into each Kdu component.

For more information, see the <a href="https://kdu-js.web.app/guide/components/registration.html#global-registration" target="_blank" rel="noopener noreferrer">Global Registration Kdu Documentation</a>.

### Prefetching Application JavaScript

By default, the Kdu CLI will automatically generate prefetch hints for the JavaScript in your application. Prefetching utiltizes the browser idle time to download documents that the user might visit in the near future. When the user visits a page that requires the prefetched document, it can be served quickly from the browser's cache.

Prefetching consumes bandwidth, so if you have a large app, you may want to disable it. You can do this by modifying or creating your `kdu.config.js` file:

**kdu.config.js**

```js
module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
};
```

The configuration above will prevent all files from being prefetched and, instead, will be loaded when they are needed. You can also select certain chunks to prefetch. Check out the <a href="https://kdujs-cli.web.app/guide/html-and-static-assets.html#prefetch" target="_blank" rel="noopener noreferrer">Kdu CLI Docs on Prefetching</a> for more examples.

## Build a Native App

We now have the basics of an Navify Kdu app down, including some UI components and navigation. The great thing about Navify Framework’s components is that they work anywhere, including iOS, Android, and PWAs. To deploy to mobile, desktop, and beyond, we use Navify’s cross-platform app runtime [Jigra](https://jigrajs.web.app). It provides a consistent, web-focused set of APIs that enable an app to stay as close to web-standards as possible while accessing rich native device features on platforms that support them.

Adding native functionality is easy. First, add Jigra to your project:

```shell
navify integrations enable jigra
```

Next, build the project, then add your platform of choice:

```shell
navify build
navify jig add ios
navify jig add android
```

We use the standard native IDEs (Xcode and Android Studio) to open, build, and run the iOS and Android projects:

```shell
navify jig open ios
navify jig open android
```

Additional details can be found [here](https://jigrajs.web.app/docs/getting-started/with-navify).

Next, check out [all the APIs](https://jigrajs.web.app/docs/apis) that are available. There is some great features, including the [Camera API](https://jigrajs.web.app/docs/apis/camera). We can implement photo capture functionality in just a few lines of code:

```html
<template>
  <nav-page>
    <nav-header>
      <nav-toolbar>
        <nav-title>Navify Blank</nav-title>
      </nav-toolbar>
    </nav-header>
    <nav-content class="nav-padding">
      <img :src="photo" />
      <nav-button @click="takePhoto()">Take Photo</nav-button>
    </nav-content>
  </nav-page>
</template>

<script lang="ts">
  import { NavButton, NavContent, NavHeader, NavPage, NavTitle } from '@navify/kdu';
  import { defineComponent, ref } from 'kdu';
  import { Plugins, CameraResultType } from '@jigra/core';
  const { Camera } = Plugins;

  export default defineComponent({
    name: 'Home',
    components: {
      NavButton,
      NavContent,
      NavHeader,
      NavPage,
      NavTitle,
    },
    setup() {
      const imageSrc = ref('');
      const takePhoto = async () => {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.Uri,
        });

        imageSrc.value = image.webPath;
      };

      return {
        photo: imageSrc,
        takePhoto,
      };
    },
  });
</script>
```

## Where to go from here

This guide covered the basics of creating an Navify Kdu app, adding some basic navigation, and introducing Jigra as a way of building native apps. To dive deeper into building complete Navify Framework apps with Kdu and Jigra, follow our [First App guide](your-first-app.md).

For a more detailed look at Navify Frameworks’s components, check out the [component API pages](https://navifyframework.web.app/docs/components). For more details on Kdu, review the [Kdu Docs](https://kdu-js.web.app/). To keep building native features, see the [Jigra docs](https://jigrajs.web.app/docs/).

Happy app building! 🎉
