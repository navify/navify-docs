```tsx
import React from 'react';
import {
  NavBackButton,
  NavButtons,
  NavButton,
  NavHeader,
  NavContent,
  NavNavLink,
  NavToolbar,
  NavTitle,
} from '@navify/react';

import PageThree from './page-three';

function PageTwo() {
  return (
    <>
      <NavHeader>
        <NavToolbar>
          <NavButtons slot="start">
            <NavBackButton></NavBackButton>
          </NavButtons>
          <NavTitle>Page Two</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent class="nav-padding">
        <h1>Page Two</h1>
        <NavNavLink routerDirection="forward" component={() => <PageThree />}>
          <NavButton>Go to Page Three</NavButton>
        </NavNavLink>
      </NavContent>
    </>
  );
}

export default PageTwo;
```
