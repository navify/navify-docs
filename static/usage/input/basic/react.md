```tsx
import React from 'react';
import { NavInput, NavItem, NavLabel, NavList } from '@navify/react';

function Example() {
  return (
    <NavList>
      <NavItem>
        <NavLabel>Default input</NavLabel>
        <NavInput></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel>Input with placeholder</NavLabel>
        <NavInput placeholder="Enter company name"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel>Input with value</NavLabel>
        <NavInput value="121 S Pinckney St #300"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel>Readonly input</NavLabel>
        <NavInput value="Madison" readonly={true}></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel>Disabled input</NavLabel>
        <NavInput value="53703" disabled={true}></NavInput>
      </NavItem>
    </NavList>
  );
}
export default Example;
```
