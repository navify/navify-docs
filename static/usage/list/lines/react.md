```tsx
import React from 'react';
import { NavItem, NavLabel, NavList } from '@navify/react';

function Example() {
  return (
    <>
      <NavList lines="full">
        <NavItem>
          <NavLabel>Full Lines</NavLabel>
        </NavItem>
        <NavItem>
          <NavLabel>Full Lines</NavLabel>
        </NavItem>
        <NavItem>
          <NavLabel>Full Lines</NavLabel>
        </NavItem>
      </NavList>

      <NavList lines="inset">
        <NavItem>
          <NavLabel>Inset Lines</NavLabel>
        </NavItem>
        <NavItem>
          <NavLabel>Inset Lines</NavLabel>
        </NavItem>
        <NavItem>
          <NavLabel>Inset Lines</NavLabel>
        </NavItem>
      </NavList>

      <NavList lines="none">
        <NavItem>
          <NavLabel>No Lines</NavLabel>
        </NavItem>
        <NavItem>
          <NavLabel>No Lines</NavLabel>
        </NavItem>
        <NavItem>
          <NavLabel>No Lines</NavLabel>
        </NavItem>
      </NavList>
    </>
  );
}
export default Example;
```
