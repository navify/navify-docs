```tsx
import React from 'react';
import { NavItem, NavItemOption, NavItemOptions, NavItemSliding, NavLabel, NavList } from '@navify/react';

function Example() {
  return (
    <NavList>
      <NavItemSliding>
        <NavItemOptions side="start">
          <NavItemOption color="success" expandable>Archive</NavItemOption>
        </NavItemOptions>

        <NavItem>
          <NavLabel>Sliding Item with Expandable Options</NavLabel>
        </NavItem>

        <NavItemOptions side="end">
          <NavItemOption>Favorite</NavItemOption>
          <NavItemOption color="danger" expandable>Delete</NavItemOption>
        </NavItemOptions>
      </NavItemSliding>
    </NavList>
  );
}
export default Example;
```
