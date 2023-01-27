---
title: React Lifecycle
sidebar_label: Lifecycle
---

<head>
  <title>React Lifecycle: A Guide to Navify React App Component Lifecycles</title>
  <meta
    name="description"
    content="The React Lifecycle guide discusses how to use the Navify Lifecycle events in an Navify React application. Read to learn more about React component lifecycles."
  />
</head>

This guide discusses how to use the Navify Lifecycle events in an Navify React application.

## Navify Lifecycle Methods

Navify provides a few lifecycle methods that you can use in your apps:

| Event Name         | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| `navViewWillEnter` | Fired when the component routing to is about to animate into view. |
| `navViewDidEnter`  | Fired when the component routing to has finished animating.        |
| `navViewWillLeave` | Fired when the component routing from is about to animate.         |
| `navViewDidLeave`  | Fired when the component routing to has finished animating.        |

The way you access these methods varies based on if you are using class-based components or functional components. We cover both methods below.

## Lifecycle Methods in Class-Based Components

to use the Navify Lifecycle methods in a class-based component, you must wrap your component with the `withNavLifeCycle` higher order component (HOC) like so:

```tsx
export default withNavLifeCycle(HomePage);
```

:::note
`withNavLifeCycle` is imported from `@navify/react`
:::

You can then create the appropriate lifecycle method on your class component, and the HOC calls that method when the event happens. Below is the entire component with each of the lifecycle methods implemented:

```tsx
import React from 'react';
import { NavHeader, NavPage, NavToolbar, NavTitle, NavContent, withNavLifeCycle } from '@navify/react';

class HomePage extends React.Component {
  navViewWillEnter() {
    console.log('navViewWillEnter event fired');
  }

  navViewWillLeave() {
    console.log('navViewWillLeave event fired');
  }

  navViewDidEnter() {
    console.log('navViewDidEnter event fired');
  }

  navViewDidLeave() {
    console.log('navViewDidLeave event fired');
  }

  render() {
    return (
      <NavPage>
        <NavHeader>
          <NavToolbar>
            <NavTitle>Home</NavTitle>
          </NavToolbar>
        </NavHeader>
        <NavContent></NavContent>
      </NavPage>
    );
  }
}

export default withNavLifeCycle(HomePage);
```

## Lifecycle Methods in Functional Components

Navify React exports hooks for each of the lifecycle methods that you can use in your functional components. Each of the hooks takes the method you want called when the event fires.

```tsx
import {
  NavContent,
  NavHeader,
  NavTitle,
  NavToolbar,
  useNavViewDidEnter,
  useNavViewDidLeave,
  useNavViewWillEnter,
  useNavViewWillLeave,
} from '@navify/react';
import React from 'react';

const HomePage: React.FC = () => {
  useNavViewDidEnter(() => {
    console.log('navViewDidEnter event fired');
  });

  useNavViewDidLeave(() => {
    console.log('navViewDidLeave event fired');
  });

  useNavViewWillEnter(() => {
    console.log('navViewWillEnter event fired');
  });

  useNavViewWillLeave(() => {
    console.log('navViewWillLeave event fired');
  });

  return (
    <NavPage>
      <NavHeader>
        <NavToolbar>
          <NavTitle>Home</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent></NavContent>
    </NavPage>
  );
};

export default HomePage;
```

:::note
Functional components don't need to be wrapped with the `withNavLifeCycle` HOC as class components do.
:::

## React LifeCycle Methods

All the lifecycle methods in React (`componentDidMount`, `componentWillUnmount`, etc..) are available for you to use as well. However, since Navify React manages the lifetime of a page, certain events might not fire when you expect them to. For instance, `componentDidMount` fires the first time a page is displayed, but if you navigate away from the page Navify might keep the page around in the DOM, and a subsequent visit to the page might not call `componentDidMount` again. This scenario is the main reason the Navify lifecycle methods exist, to still give you a way to call logic when views enter and exit when the native framework's events might not fire.

## Guidance for Each LifeCycle Method

Below are some tips on use cases for each of the life cycle events.

- `navViewWillEnter` - Since `navViewWillEnter` is called every time the view is navigated to (regardless if initialized or not), it's a good method to load data from services.
- `navViewDidEnter` - If you see performance problems from using `navViewWillEnter` when loading data, you can do your data calls in `navViewDidEnter` instead. This event won't fire until after the page is visible to the user, however, so you might want to use either a loading indicator or a skeleton screen, so content doesn't flash in un-naturally after the transition is complete.
- `navViewWillLeave` - Can be used for cleanup, like unsubscribing from data sources. Since `componentWillUnmount` might not fire when you navigate from the current page, put your cleanup code here if you don't want it active while the screen is not in view.
- `navViewDidLeave` - When this event fires, you know the new page has fully transitioned in, so any logic you might not normally do when the view is visible can go here.
