```tsx
import React from 'react';
import { NavItem, NavLabel, NavList, NavToggle } from '@navify/react';

function Example() {
  return (
    <NavList>
      <NavItem>
        <NavLabel>Default Toggle</NavLabel>
        <NavToggle slot="end"></NavToggle>
      </NavItem>
      <NavItem>
        <NavLabel>Checked Toggle</NavLabel>
        <NavToggle slot="end" checked={true}></NavToggle>
      </NavItem>
      <NavItem>
        <NavLabel>Disabled Toggle</NavLabel>
        <NavToggle slot="end" disabled={true}></NavToggle>
      </NavItem>
      <NavItem>
        <NavLabel>Disabled Checked Toggle</NavLabel>
        <NavToggle slot="end" checked={true} disabled={true}></NavToggle>
      </NavItem>
    </NavList>
  );
}
export default Example;
```
