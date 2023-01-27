---
sidebar_label: Performance
title: React Performance
---

<head>
  <title>React Performance Testing - Using Loops with Navify App Components</title>
  <meta
    name="description"
    content="React performance testing for Navify apps. When using loops with Navify components, we recommend using React's key attribute. Read to learn more."
  />
</head>

## Loops with Navify Components

When using loops with Navify components, we recommend using React's `key` attribute. This allows React to re-render loop elements in an efficient way by only updating the content inside of the component rather than re-creating the component altogether.

By using `key` you can provide a stable identity for each loop element so React can track insertions and deletions within the iterator. Below is an example of how to use `key`:

**MyComponent.tsx**

```tsx
import React, { useState } from 'react';
import { NavContent, NavItem, NavLabel, NavPage } from '@navify/react';

export const MyComponent: React.FC = () => {
  const [items, setItems] = useState([{ id: 0, value: 'Item 0' }, { id: 1, value: 'Item 1' }, ...]);

  return (
    <NavPage>
      <NavContent>
        {items.map(item => {
          return (
            <NavItem key={item.id}>
              <NavLabel>{item.value}</NavLabel>
            </NavItem>
          )
        })}
      </NavContent>
    </NavPage>
  )
}
```

In this example, we have an array of objects called `items`. Each object contains a `value` and an `id`. Using the `key` attribute, we pass the `item.id` for each object. This `id` is used to provide a stable identity for each loop element.

For more information on how React renders lists using `key` see: https://reactjs.org/docs/lists-and-keys.html
