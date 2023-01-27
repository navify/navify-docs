```tsx
import React from 'react';
import { NavBadge, NavItem, NavLabel, NavList } from '@navify/react';
function Example() {
  return (
    <NavList>
      <NavItem>
        <NavBadge slot="start">11</NavBadge>
        <NavLabel>Badge in start slot</NavLabel>
      </NavItem>
      <NavItem>
        <NavBadge slot="end">22</NavBadge>
        <NavLabel>Badge in end slot</NavLabel>
      </NavItem>
    </NavList>
  );
}
export default Example;
```
