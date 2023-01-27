```tsx
import React from 'react';
import { NavFooter, NavHeader, NavTitle, NavToolbar } from '@navify/react';

function Example() {
  return (
    <>
      <NavHeader>
        <NavToolbar>
          <NavTitle>Header Toolbar</NavTitle>
        </NavToolbar>
      </NavHeader>

      <NavFooter>
        <NavToolbar>
          <NavTitle>Footer Toolbar</NavTitle>
        </NavToolbar>
      </NavFooter>
    </>
  );
}
export default Example;
```
