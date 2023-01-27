```tsx
import React from 'react';
import { NavInput, NavItem, NavLabel, NavList } from '@navify/react';

function Example() {
  return (
    <NavList>
      <NavItem>
        <NavLabel>Default label</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel position="fixed">Fixed label</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel position="stacked">Stacked label</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel position="floating">Floating label</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>
    </NavList>
  );
}
export default Example;
```
