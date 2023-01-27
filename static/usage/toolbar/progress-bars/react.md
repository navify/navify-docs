```tsx
import React from 'react';
import { NavHeader, NavProgressBar, NavTitle, NavToolbar } from '@navify/react';

function Example() {
  return (
    <NavHeader>
      <NavToolbar>
        <NavTitle>Toolbar</NavTitle>
        <NavProgressBar type="indeterminate"></NavProgressBar>
      </NavToolbar>
    </NavHeader>
  );
}
export default Example;
```
