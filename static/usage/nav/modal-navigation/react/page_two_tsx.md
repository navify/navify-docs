```tsx
import React from 'react';
import { NavButton, NavContent } from '@navify/react';

import PageThree from './page-three';

function PageTwo({ nav }: { nav: HTMLNavNavElement }) {
  const navigateToPageThree = () => nav.push(PageThree, { nav });

  return (
    <NavContent class="nav-padding">
      <h1>Page Two</h1>
      <NavButton onClick={navigateToPageThree}>Go to Page Three</NavButton>
    </NavContent>
  );
}

export default PageTwo;
```
