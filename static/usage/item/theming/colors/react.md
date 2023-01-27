```tsx
import React from 'react';
import { NavItem, NavLabel } from '@navify/react';

function Example() {
  return (
    <>
      <NavItem>
        <NavLabel>Default Item</NavLabel>
      </NavItem>
      <NavItem color="primary">
        <NavLabel>Primary Item</NavLabel>
      </NavItem>
      <NavItem color="secondary">
        <NavLabel>Secondary Item</NavLabel>
      </NavItem>
      <NavItem color="tertiary">
        <NavLabel>Tertiary Item</NavLabel>
      </NavItem>
      <NavItem color="success">
        <NavLabel>Success Item</NavLabel>
      </NavItem>
      <NavItem color="warning">
        <NavLabel>Warning Item</NavLabel>
      </NavItem>
      <NavItem color="danger">
        <NavLabel>Danger Item</NavLabel>
      </NavItem>
      <NavItem color="light">
        <NavLabel>Light Item</NavLabel>
      </NavItem>
      <NavItem color="medium">
        <NavLabel>Medium Item</NavLabel>
      </NavItem>
      <NavItem color="dark">
        <NavLabel>Dark Item</NavLabel>
      </NavItem>
    </>
  );
}
export default Example;
```
