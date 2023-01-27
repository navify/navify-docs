```tsx
import React from 'react';
import { NavIcon, NavItem, NavLabel } from '@navify/react';
import { informationCircle, star } from 'navicons/icons';

function Example() {
  return (
    <>
      <NavItem>
        <NavLabel>
          Default Icon
        </NavLabel>
        <NavIcon icon={informationCircle} slot="end"></NavIcon>
      </NavItem>

      <NavItem>
        <NavLabel>
          Large Icon
        </NavLabel>
        <NavIcon icon={informationCircle} size="large" slot="end"></NavIcon>
      </NavItem>

      <NavItem>
        <NavLabel>
          Small Icon
        </NavLabel>
        <NavIcon icon={informationCircle} size="small" slot="end"></NavIcon>
      </NavItem>

      <NavItem>
        <NavIcon icon={star} slot="start"></NavIcon>
        <NavLabel>
          Default Icon
        </NavLabel>
      </NavItem>
    </>
  );
}
export default Example;
```
