```tsx
import React from 'react';
import { NavInput, NavItem, NavLabel, NavList } from '@navify/react';

function Example() {
  return (
    <NavList>
      <NavItem>
        <NavLabel>Text input</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel>Number input</NavLabel>
        <NavInput type="number" placeholder="000"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel>Password input</NavLabel>
        <NavInput type="password" value="password"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel>Email input</NavLabel>
        <NavInput type="email" placeholder="email@domain.com"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel>Telephone input</NavLabel>
        <NavInput type="tel" placeholder="888-888-8888"></NavInput>
      </NavItem>
    </NavList>
  );
}
export default Example;
```
