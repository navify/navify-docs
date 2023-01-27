```tsx
import React from 'react';
import { NavItem, NavLabel, NavSpinner } from '@navify/react';

function Example() {
  return (
    <>
      <NavItem>
        <NavLabel>Default</NavLabel>
        <NavSpinner></NavSpinner>
      </NavItem>

      <NavItem>
        <NavLabel>Dots</NavLabel>
        <NavSpinner name="dots"></NavSpinner>
      </NavItem>

      <NavItem>
        <NavLabel>Lines</NavLabel>
        <NavSpinner name="lines"></NavSpinner>
      </NavItem>

      <NavItem>
        <NavLabel>Lines Small</NavLabel>
        <NavSpinner name="lines-small"></NavSpinner>
      </NavItem>

      <NavItem>
        <NavLabel>Lines Sharp</NavLabel>
        <NavSpinner name="lines-sharp"></NavSpinner>
      </NavItem>

      <NavItem>
        <NavLabel>Lines Sharp Small</NavLabel>
        <NavSpinner name="lines-sharp-small"></NavSpinner>
      </NavItem>

      <NavItem>
        <NavLabel>Bubbles</NavLabel>
        <NavSpinner name="bubbles"></NavSpinner>
      </NavItem>

      <NavItem>
        <NavLabel>Circles</NavLabel>
        <NavSpinner name="circles"></NavSpinner>
      </NavItem>

      <NavItem>
        <NavLabel>Circular</NavLabel>
        <NavSpinner name="circular"></NavSpinner>
      </NavItem>

      <NavItem>
        <NavLabel>Crescent</NavLabel>
        <NavSpinner name="crescent"></NavSpinner>
      </NavItem>
    </>
  );
}
export default Example;
```
