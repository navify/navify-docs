```tsx
import React from 'react';
import { NavBadge, NavItem, NavLabel, NavList } from '@navify/react';

import './main.css';

function Example() {
  return (
    <NavList>
      <NavItem>
        <NavLabel>Badges styled</NavLabel>
        <NavBadge>1</NavBadge>
      </NavItem>
    </NavList>
  );
}
export default Example;
```
