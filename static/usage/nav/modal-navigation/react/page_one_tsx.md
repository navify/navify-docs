```tsx
import React from 'react';
import { NavButton, NavContent } from '@navify/react';

import PageTwo from './page-two';

function PageOne({ nav }: { nav: HTMLNavNavElement }) {
  const navigateToPageTwo = () => nav.push(PageTwo, { nav });
  return (
    <NavContent class="nav-padding">
      <h1>Page One</h1>
      <NavButton onClick={navigateToPageTwo}>Go to Page Two</NavButton>
    </NavContent>
  );
}

export default PageOne;
```
