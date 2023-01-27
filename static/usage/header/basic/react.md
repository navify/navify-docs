```tsx
import React from 'react';
import { NavContent, NavHeader, NavTitle, NavToolbar } from '@navify/react';

function Example() {
  return (
    <>
      <NavHeader>
        <NavToolbar>
          <NavTitle>Header</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent className="nav-padding">
        <h1>Content</h1>
      </NavContent>
    </>
  );
}
export default Example;
```
