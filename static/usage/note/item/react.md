```tsx
import React from 'react';
import { NavItem, NavLabel, NavNote } from '@navify/react';

function Example() {
  return (
    <>
      <NavItem>
        <NavLabel>Label</NavLabel>
        <NavNote slot="end">Note (End)</NavNote>
      </NavItem>

      <NavItem>
        <NavNote slot="start">Note (Start)</NavNote>
        <NavLabel>Label</NavLabel>
      </NavItem>
    </>
  );
}
export default Example;
```
