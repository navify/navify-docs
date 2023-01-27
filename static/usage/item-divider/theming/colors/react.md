```tsx
import React from 'react';
import { NavItemDivider, NavLabel } from '@navify/react';

function Example() {
  return (
    <>
      <NavItemDivider>
        <NavLabel>Default</NavLabel>
      </NavItemDivider>
      <NavItemDivider color="primary">
        <NavLabel>Primary</NavLabel>
      </NavItemDivider>
      <NavItemDivider color="secondary">
        <NavLabel>Secondary</NavLabel>
      </NavItemDivider>
      <NavItemDivider color="tertiary">
        <NavLabel>Tertiary</NavLabel>
      </NavItemDivider>
      <NavItemDivider color="success">
        <NavLabel>Success</NavLabel>
      </NavItemDivider>
      <NavItemDivider color="warning">
        <NavLabel>Warning</NavLabel>
      </NavItemDivider>
      <NavItemDivider color="danger">
        <NavLabel>Danger</NavLabel>
      </NavItemDivider>
      <NavItemDivider color="light">
        <NavLabel>Light</NavLabel>
      </NavItemDivider>
      <NavItemDivider color="medium">
        <NavLabel>Medium</NavLabel>
      </NavItemDivider>
      <NavItemDivider color="dark">
        <NavLabel>Dark</NavLabel>
      </NavItemDivider>
    </>
  );
}
export default Example;
```
