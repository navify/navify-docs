```tsx
import React from 'react';
import { NavItem, NavItemOption, NavItemOptions, NavItemSliding, NavLabel, NavList } from '@navify/react';

function Example() {
  return (
    <NavList>
      <NavItemSliding>
        <NavItem>
          <NavLabel>Sliding Item with End Options</NavLabel>
        </NavItem>

        <NavItemOptions>
          <NavItemOption>Favorite</NavItemOption>
          <NavItemOption color="danger">Delete</NavItemOption>
        </NavItemOptions>
      </NavItemSliding>

      <NavItemSliding>
        <NavItemOptions side="start">
          <NavItemOption color="success">Archive</NavItemOption>
        </NavItemOptions>

        <NavItem>
          <NavLabel>Sliding Item with Start Options</NavLabel>
        </NavItem>
      </NavItemSliding>

      <NavItemSliding>
        <NavItemOptions side="start">
          <NavItemOption color="success">Archive</NavItemOption>
        </NavItemOptions>

        <NavItem>
          <NavLabel>Sliding Item with Options on Both Sides</NavLabel>
        </NavItem>

        <NavItemOptions side="end">
          <NavItemOption>Favorite</NavItemOption>
          <NavItemOption color="danger">Delete</NavItemOption>
        </NavItemOptions>
      </NavItemSliding>
    </NavList>
  );
}
export default Example;
```
