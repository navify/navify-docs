```tsx
import React from 'react';
import { NavItem, NavLabel } from '@navify/react';

import './main.css';

function Example() {
  return (
    <>
      <NavItem button detail lines="full">
        <NavLabel>Custom Item</NavLabel>
      </NavItem>

      <NavItem button detail lines="full">
        <NavLabel>Custom Item</NavLabel>
      </NavItem>

      <NavItem button detail lines="full">
        <NavLabel>Custom Item</NavLabel>
      </NavItem>
    </>
  );
}
export default Example;
```
