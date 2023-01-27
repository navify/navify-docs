```tsx
import React from 'react';
import { NavCheckbox, NavInput, NavItem, NavLabel, NavToggle } from '@navify/react';

function Example() {
  return (
    <>
      <NavItem>
        <NavLabel>Default Label</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel position="fixed">Fixed Label</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel position="floating">Floating Label</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel position="stacked">Stacked Label</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel>Toggle</NavLabel>
        <NavToggle slot="end" checked></NavToggle>
      </NavItem>

      <NavItem>
        <NavCheckbox slot="start" checked></NavCheckbox>
        <NavLabel>Checkbox</NavLabel>
      </NavItem>
    </>
  );
}
export default Example;
```
