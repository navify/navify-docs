---
sidebar_label: Lifecycle
---

# Kdu Lifecycle

This guide discusses how to use the Navify Framework Lifecycle events in an Navify Kdu application.

## Navify Framework Lifecycle Methods

Navify Framework provides a few lifecycle methods that you can use in your apps:

| Event Name         | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| `navViewWillEnter` | Fired when the component routing to is about to animate into view. |
| `navViewDidEnter`  | Fired when the component routing to has finished animating.        |
| `navViewWillLeave` | Fired when the component routing from is about to animate.         |
| `navViewDidLeave`  | Fired when the component routing to has finished animating.        |

The lifecycles are defined the same way Kdu lifecycle methods are - as functions at the root of your Kdu component:

```tsx
import { NavPage } from '@navify/kdu';
import { defineComponent } from 'kdu';

export default defineComponent({
  name: 'Home',
  navViewDidEnter() {
    console.log('Home page did enter');
  },
  navViewDidLeave() {
    console.log('Home page did leave');
  },
  navViewWillEnter() {
    console.log('Home page will enter');
  },
  navViewWillLeave() {
    console.log('Home page will leave');
  },
  components: {
    NavPage,
  },
});
```

### Composition API Hooks

These lifecycles can also be expressed using Kdu 3's Composition API:

```tsx
import { NavPage, onNavViewWillEnter, onNavViewDidEnter, onNavViewWillLeave, onNavViewDidLeave } from '@navify/kdu';
import { defineComponent } from 'kdu';

export default defineComponent({
  name: 'Home',
  components: {
    NavPage,
  },
  setup() {
    onNavViewDidEnter(() => {
      console.log('Home page did enter');
    });

    onNavViewDidLeave(() => {
      console.log('Home page did leave');
    });

    onNavViewWillEnter(() => {
      console.log('Home page will enter');
    });

    onNavViewWillLeave(() => {
      console.log('Home page will leave');
    });
  },
});
```

:::note
Pages in your app need to be using the `NavPage` component in order for lifecycle methods and hooks to fire properly.
:::

## How Navify Framework Handles the Life of a Page

Navify Framework has its router outlet, called `<nav-router-outlet>`. This outlet extends Kdu Router's `<router-view>` with some additional functionality to enable better experiences for mobile devices.

When an app is wrapped in `<nav-router-outlet>`, Navify Framework treats navigation a bit differently. When you navigate to a new page, Navify Framework will keep the old page in the existing DOM, but hide it from your view and transition the new page. The reason we do this is two-fold:

1. We can maintain the state of the old page (data on the screen, scroll position, etc...).
2. We can provide a smoother transition back to the page since it is already there and does not need to be created.

Pages are only removed from the DOM when they are "popped", for instance, by pressing the back button in the UI or the browsers back button.

Because of this special handling, certain Kdu Router components such as `<keep-alive>`, `<transition>`, and `<router-view>` should not be used in Navify Kdu applications. Additionally, Kdu Router's Scroll Behavior API is not needed here as each page's scroll position is preserved automatically.

All the lifecycle methods in Kdu (`mounted`, `beforeUnmount`, etc..) are available for you to use as well. However, since Navify Kdu manages the lifetime of a page, certain events might not fire when you expect them to. For instance, `mounted` fires the first time a page is displayed, but if you navigate away from the page Navify Framework might keep the page around in the DOM, and a subsequent visit to the page might not call `mounted` again. This scenario is the main reason the Navify Framework lifecycle methods exist, to still give you a way to call logic when views enter and exit when the native framework's events might not fire.

## Guidance for Each Lifecycle Method

Below are some tips on use cases for each of the life cycle events.

- `navViewWillEnter` - Since `navViewWillEnter` is called every time the view is navigated to (regardless if initialized or not), it is a good method to load data from services.
- `navViewDidEnter` - If you see performance problems from using `navViewWillEnter` when loading data, you can do your data calls in `navViewDidEnter` instead. However, this event will not fire until after the page is visible to the user, so you might want to use either a loading indicator or a skeleton screen such as [nav-skeleton-text](../api/skeleton-text), so content does not flash in un-naturally after the transition is complete.
- `navViewWillLeave` - Can be used for cleanup, like unsubscribing from data sources. Since `beforeUnmount` might not fire when you navigate from the current page, put your cleanup code here if you do not want it active while the screen is not in view.
- `navViewDidLeave` - When this event fires, you know the new page has fully transitioned in, so any logic you might not normally do when the view is visible can go here.
