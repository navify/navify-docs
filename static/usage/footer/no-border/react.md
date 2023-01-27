```tsx
import React from 'react';
import { NavContent, NavFooter, NavTitle, NavToolbar } from '@navify/react';

function Example() {
  return (
    <>
      <NavContent className="nav-padding">
        <h1>Content</h1>
      </NavContent>
      <NavFooter className="nav-no-border">
        <NavToolbar>
          <NavTitle>Footer</NavTitle>
        </NavToolbar>
      </NavFooter>
    </>
  );
}
export default Example;
```
