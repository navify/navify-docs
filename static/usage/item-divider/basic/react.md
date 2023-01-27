```tsx
import React from 'react';
import { NavItem, NavItemDivider, NavItemGroup, NavLabel, NavList } from '@navify/react';

function Example() {
  return (
    <NavList>
      <NavItemGroup>
        <NavItemDivider>
          <NavLabel>
            Section A
          </NavLabel>
        </NavItemDivider>

        <NavItem>
          <NavLabel>A1</NavLabel>
        </NavItem>
        <NavItem>
          <NavLabel>A2</NavLabel>
        </NavItem>
        <NavItem lines="none">
          <NavLabel>A3</NavLabel>
        </NavItem>
      </NavItemGroup>

      <NavItemGroup>
        <NavItemDivider>
          <NavLabel>
            Section B
          </NavLabel>
        </NavItemDivider>

        <NavItem>
          <NavLabel>B1</NavLabel>
        </NavItem>
        <NavItem>
          <NavLabel>B2</NavLabel>
        </NavItem>
        <NavItem lines="none">
          <NavLabel>B3</NavLabel>
        </NavItem>
      </NavItemGroup>
    </NavList>
  );
}
export default Example;
```
