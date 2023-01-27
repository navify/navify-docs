```tsx
import React from 'react';
import { NavHeader, NavSearchbar, NavTitle, NavToolbar } from '@navify/react';

function Example() {
  return (
    <NavHeader>
      <NavToolbar>
        <NavTitle>Toolbar</NavTitle>
      </NavToolbar>
      <NavToolbar>
        <NavSearchbar></NavSearchbar>
      </NavToolbar>
    </NavHeader>
  );
}
export default Example;
```
