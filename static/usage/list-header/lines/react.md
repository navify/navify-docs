```tsx
import React from 'react';
import { NavItem, NavLabel, NavList, NavListHeader } from '@navify/react';

function Example() {
  return (
    <>
      <NavList>
        <NavListHeader>
          <NavLabel>Default</NavLabel>
        </NavListHeader>
        <NavItem>
          <NavLabel>Item</NavLabel>
        </NavItem>
        <NavItem>
          <NavLabel>Item</NavLabel>
        </NavItem>
      </NavList>

      <NavList>
        <NavListHeader lines="inset">
          <NavLabel>Inset</NavLabel>
        </NavListHeader>
        <NavItem>
          <NavLabel>Item</NavLabel>
        </NavItem>
        <NavItem>
          <NavLabel>Item</NavLabel>
        </NavItem>
      </NavList>

      <NavList>
        <NavListHeader lines="full">
          <NavLabel>Full</NavLabel>
        </NavListHeader>
        <NavItem>
          <NavLabel>Item</NavLabel>
        </NavItem>
        <NavItem>
          <NavLabel>Item</NavLabel>
        </NavItem>
      </NavList>
    </>
  );
}
export default Example;
```
