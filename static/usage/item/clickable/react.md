```tsx
import React from 'react';
import { NavItem, NavLabel } from '@navify/react';

function Example() {
  return (
    <>
      <NavItem href="#">
        <NavLabel>Anchor Item</NavLabel>
      </NavItem>

      <NavItem href="#" disabled={true}>
        <NavLabel>Disabled Anchor Item</NavLabel>
      </NavItem>

      <NavItem button>
        <NavLabel>Button Item</NavLabel>
      </NavItem>

      <NavItem button disabled={true}>
        <NavLabel>Disabled Button Item</NavLabel>
      </NavItem>
    </>
  );
}
export default Example;
```
