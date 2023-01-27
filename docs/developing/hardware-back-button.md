---
title: Hardware Back Button
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Hardware Back Button for Jigra & Cordova on Android Devices</title>
  <meta
    name="description"
    content="The hardware back button is found on most Android devices. Read to learn more about hardware back button use in Jigra and Cordova on Navify applications."
  />
</head>

The hardware back button is found on most Android devices. In native applications it can be used to close modals, navigate to the previous view, exit an app, and more. By default in Navify, when the back button is pressed, the current view will be popped off the navigation stack, and the previous view will be displayed. If no previous view exists in the navigation stack, nothing will happen. This guide will show how to customize the behavior of the hardware back button.

:::note
The hardware back button refers to the physical back button on an Android device and should not be confused with either the browser back button or `nav-back-button`. The information in this guide only applies to Android devices.
:::

## Hardware Back Button in Jigra and Cordova

:::note
The `@jigra/app` package must be installed in Jigra apps to use the hardware back button.
:::

When running in a Jigra or Cordova application, Navify Framework will emit an `navBackButton` event when a user presses the hardware back button.

When listening for the `navBackButton` event, you can register a handler to be fired. This handler can perform actions such as quitting the app or opening a confirmation dialog. Each handler must be assigned a priority. By default, only one handler is fired per hardware back button press. The priority value is used to determine which callback should be called. This is useful because if you have a modal open, you likely would not want the modal to close _and_ the app to navigate backwards when pressing the hardware back button. Only running one handler at a time allows the modal to close but still requires another press of the hardware back button to navigate backwards.

There are situations where you might want to have multiple handlers fired. Each handler callback passes in a function as a parameter that can be used to tell the framework to call the next handler.

## Hardware Back Button in a Browser

When running your app in a mobile browser or as a PWA, hardware back button customization will be limited. This is because Jigra and Cordova expose additional features that are not exposed in a normal web browser. For example, closing overlays and menus via the hardware back button are functionalities that are currently not supported when running your app in a mobile browser. These are known limitations and do not currently have straightforward solutions.

For complete hardware back button support, we recommend using Jigra or Cordova.

:::note
The `navBackButton` event will not be emitted when running an app in a browser or as a PWA.
:::

## Basic Usage

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' },
    { value: 'kdu', label: 'Kdu' },
  ]
}>
<TabItem value="javascript">

```javascript
document.addEventListener('navBackButton', (ev) => {
  ev.detail.register(10, () => {
    console.log('Handler was called!');
  });
});

```
</TabItem>
<TabItem value="react">

```tsx
document.addEventListener('navBackButton', (ev) => {
  ev.detail.register(10, () => {
    console.log('Handler was called!');
  });
});
```
</TabItem>
<TabItem value="kdu">

```tsx
import { useBackButton } from '@navify/kdu';

...

export default {
  setup() {
    useBackButton(10, () => {
      console.log('Handler was called!');
    });
  }
}
```
</TabItem>
</Tabs>
````

In this example, we are registering a handler to be called when the hardware back button is pressed. We have set the priority to be 10, and we have not indicated to the framework that we want the next handler to be called. As a result, any handlers with a priority less than 10 will not be called. A handler that has a priority greater than 10 will be called first.

In the event that there are handlers with the same priority value, the handler that was registered _last_ will be called. See [Handlers with the Same Priorities](#handlers-with-the-same-priorities) for more information.

## Calling Multiple Handlers

Each hardware back button callback has a `processNextHandler` parameter. Calling this function allows you to continue calling hardware back button handlers.

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' },
    { value: 'kdu', label: 'Kdu' },
  ]
}>
<TabItem value="javascript">

```javascript
document.addEventListener('navBackButton', (ev) => {
  ev.detail.register(5, () => {
    console.log('Another handler was called!');
  });

  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler was called!');

    processNextHandler();
  });
});

```
</TabItem>
<TabItem value="react">

```tsx
document.addEventListener('navBackButton', (ev) => {
  ev.detail.register(5, () => {
    console.log('Another handler was called!');
  });

  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler was called!');

    processNextHandler();
  });
});
```
</TabItem>
<TabItem value="kdu">

```tsx
import { useBackButton } from '@navify/kdu';

...

export default {
  setup() {
    useBackButton(5, () => {
      console.log('Another handler was called!');
    });

    useBackButton(10, (processNextHandler) => {
      console.log('Handler was called!');

      processNextHandler();
    });
  }
}
```
</TabItem>
</Tabs>
````

This example shows how to indicate to Navify Framework that you want the next handler to be fired. All callbacks are provided with a `processNextHandler` function as a parameter. Calling this will cause the next handler, if any exists, to be fired.

## Handlers with the Same Priorities

Internally, Navify Framework uses something similar to a priority queue to manage hardware back button handlers. The handler with the largest priority value will be called first. In the event that there are multiple handlers with the same priority value, the _last_ handler of the same priority added to this queue will be the first handler to be called.

```javascript
document.addEventListener('navBackButton', (ev) => {
  // Handler A
  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler A was called!');

    processNextHandler();
  });

  // Handler B
  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler B was called!');

    processNextHandler();
  });
});
```

In the example above, both handlers A and B have a priority of 10. Since handler B was registered last, Navify Framework will call handler B before it calls handler A.

## Exiting the App

In some scenarios, it may be desirable to quit the app when pressing the hardware back button. This can be achieved through the use of the `navBackButton` event combined with methods that Jigra/Cordova provide.

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' },
    { value: 'kdu', label: 'Kdu' },
  ]
}>
<TabItem value="javascript">

```tsx
import { BackButtonEvent } from '@navify/core';
import { App } from '@jigra/app';

...

const routerEl = document.querySelector('nav-router');
document.addEventListener('navBackButton', (ev: BackButtonEvent) => {
  ev.detail.register(-1, () => {
    const path = window.location.pathname;
    if (path === routerEl.root) {
      App.exitApp();
    }
  });
});
```
</TabItem>
<TabItem value="react">

```tsx
import { useNavRouter } from '@navify/react';
import { App } from '@jigra/app';

...

const navRouter = useNavRouter();
document.addEventListener('navBackButton', (ev) => {
  ev.detail.register(-1, () => {
    if (!navRouter.canGoBack()) {
      App.exitApp();
    }
  });
});
```
</TabItem>
<TabItem value="kdu">

```tsx
import { useBackButton, useNavRouter } from '@navify/kdu';
import { App } from '@jigra/app';

...

export default {
  setup() {
    const navRouter = useNavRouter();
    useBackButton(-1, () => {
      if (!navRouter.canGoBack()) {
        App.exitApp();
      }
    });
  }
}
```
</TabItem>
</Tabs>
````

This example shows the application exiting when the user presses the hardware back button and there is nothing left in the navigation stack. It is also possible to display a confirmation dialog before quitting the app.

It is recommended to check whether or not the user is on the root page prior to exiting the application. Developers can use the `canGoBack` method on `NavRouter` in Navify React and Navify Kdu.

## Internal Framework Handlers

The table below lists all of the internal hardware back button event handlers that Navify Framework uses. The `Propagates` column notes whether or not that particular handler tells Navify Framework to call the next back button handler.

| Handler    | Priority | Propagates | Description                                                                                                                              |
| ---------- | -------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Overlays   | 100      | No         | Applies to overlay components `nav-action-sheet`, `nav-alert`, `nav-loading`, `nav-modal`, `nav-popover`, `nav-picker`, and `nav-toast`. |
| Menu       | 99       | No         | Applies to `nav-menu`.                                                                                                                   |
| Navigation | 0        | Yes        | Applies to routing navigation.                                                                                    |
