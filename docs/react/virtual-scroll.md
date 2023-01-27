# Virtual Scroll

One virtual scrolling solution to consider for your Navify React app is [Virtuoso](https://virtuoso.dev/). This guide will go over how to install `Virtuoso` into your Navify React application and use it with other Navify components.

## Installation

To setup the virtual scroller, first install `react-virtuoso`:

```shell
npm install react-virtuoso
```

## Usage

There are a few components that Virtuoso includes, but this example will use the `Virtuoso` component. This component should be added inside of your `NavContent` component:

```tsx
import React from 'react';
import { Virtuoso } from 'react-virtuoso';
import { NavAvatar, NavContent, NavItem, NavLabel, NavPage } from '@navify/react';
const Home: React.FC = () => (
  <NavPage>
    <NavContent>
      <Virtuoso
        style={{ height: '100%' }}
        totalCount={100}
        itemContent={(index) => {
          return (
            <div style={{ height: '56px' }}>
              <NavItem>
                <NavAvatar slot="start">
                  <img src="https://picsum.photos/seed/picsum/40/40" />
                </NavAvatar>
                <NavLabel>{index}</NavLabel>
              </NavItem>
            </div>
          );
        }}
      />
    </NavContent>
  </NavPage>
);
export default Home;
```

After adding the `Virtuoso` component to our page, we need to define the size of the virtual scroll container. In this case, we want the container to take up the full height of the screen which we can do by adding `style={{ height: '100%' }}`.

Next, we want to define the total number of items to render via the `totalCount` property.

From there, we can use the `itemContent` property to pass a function that will be called to render each item in our virtual scroll content.

An important thing to note here is the `div` that wraps our `NavItem` component. When lazy loading Navify components, there may be a few frames where the component is loaded but the styles have not loaded in. When this happens, the component's dimension will be `0`, and Virtuoso may throw an error. This is because Virtuoso needs distinct positions for each item it renders, and it cannot determine that when a component's dimension is `0`.

## Usage with Navify Components

Navify Framework requires that features such as collapsible large titles, `kdu-infinite-scroll`, `kdu-refresher`, and `kdu-reorder-group` be used within an `kdu-content`. To use these experiences with virtual scrolling, you must add the `.kdu-content-scroll-host` class to the virtual scroll viewport.

For example:

```tsx
<NavPage>
  <NavContent scrollY={false}>
    <Virtuoso className="kdu-content-scroll-host">
      {/* Your existing content and configurations */}
    </Virtuoso>
  </NavContent>
</NavPage>
```

## Further Reading

This guide only covers a small portion of what `Virtuoso` is capable of. For more details, please see the [Virtuoso documentation](https://virtuoso.dev/).
