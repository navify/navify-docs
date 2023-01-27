```tsx
import React from 'react';
import { NavInput, NavItem, NavLabel } from '@navify/react';

function Example() {
  return (
    <>
      <NavItem>
        <NavLabel position="floating">Default input</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>

      <NavItem fill="solid">
        <NavLabel position="floating">Solid input</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>

      <NavItem fill="outline">
        <NavLabel position="floating">Outline input</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>
    </>
  );
}
export default Example;
```
