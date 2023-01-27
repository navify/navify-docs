```tsx
import React from 'react';
import { NavItem, NavItemDivider, NavItemGroup, NavLabel } from '@navify/react';

function Example() {
  return (
    <>
      <NavItemGroup>
        <NavItemDivider>
          <NavLabel>A</NavLabel>
        </NavItemDivider>

        <NavItem>
          <NavLabel>Angola</NavLabel>
        </NavItem>
        <NavItem>
          <NavLabel>Argentina</NavLabel>
        </NavItem>
        <NavItem lines="none">
          <NavLabel>Armenia</NavLabel>
        </NavItem>
      </NavItemGroup>

      <NavItemGroup>
        <NavItemDivider>
          <NavLabel>B</NavLabel>
        </NavItemDivider>

        <NavItem>
          <NavLabel>Bangladesh</NavLabel>
        </NavItem>
        <NavItem>
          <NavLabel>Belarus</NavLabel>
        </NavItem>
        <NavItem lines="none">
          <NavLabel>Belgium</NavLabel>
        </NavItem>
      </NavItemGroup>
    </>
  );
}
export default Example;
```
