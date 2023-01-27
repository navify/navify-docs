```tsx
import React from 'react';
import { NavButton, NavHeader, NavContent, NavNavLink, NavToolbar, NavTitle } from '@navify/react';

import PageTwo from './page-two';

function PageOne() {
  return (
    <>
      <NavHeader>
        <NavToolbar>
          <NavTitle>Page One</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent class="nav-padding">
        <h1>Page One</h1>
        <NavNavLink routerDirection="forward" component={() => <PageTwo />}>
          <NavButton>Go to Page Two</NavButton>
        </NavNavLink>
      </NavContent>
    </>
  );
}

export default PageOne;
```
