```tsx
import React from 'react';
import { NavBackButton, NavButtons, NavHeader, NavContent, NavToolbar, NavTitle } from '@navify/react';

function PageThree() {
  return (
    <>
      <NavHeader>
        <NavToolbar>
          <NavButtons slot="start">
            <NavBackButton></NavBackButton>
          </NavButtons>
          <NavTitle>Page Three</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent class="nav-padding">
        <h1>Page Three</h1>
      </NavContent>
    </>
  );
}

export default PageThree;
```
