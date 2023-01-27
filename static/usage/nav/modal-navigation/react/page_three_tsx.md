```tsx
import React from 'react';
import { NavButton, NavContent } from '@navify/react';

function PageThree({ nav }: { nav: HTMLNavNavElement }) {
  const navigateBack = () => nav.pop();
  const navigateToRoot = () => nav.popToRoot();

  return (
    <NavContent class="nav-padding">
      <h1>Page Three</h1>
      <NavButton onClick={navigateBack}>Go Back</NavButton>
      <NavButton onClick={navigateToRoot}>Go to Root</NavButton>
    </NavContent>
  );
}

export default PageThree;
```
