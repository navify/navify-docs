```tsx
import React from 'react';
import { NavBreadcrumb, NavBreadcrumbs, NavIcon } from '@navify/react';
import { arrowForwardCircle } from 'navicons/icons';

function Example() {
  return (
    <NavBreadcrumbs>
      <NavBreadcrumb href="#home">
        Home
        <NavIcon slot="separator" icon={arrowForwardCircle}></NavIcon>
      </NavBreadcrumb>
      <NavBreadcrumb href="#electronics">
        Electronics
        <NavIcon slot="separator" icon={arrowForwardCircle}></NavIcon>
      </NavBreadcrumb>
      <NavBreadcrumb href="#cameras">
        Cameras
        <NavIcon slot="separator" icon={arrowForwardCircle}></NavIcon>
      </NavBreadcrumb>
      <NavBreadcrumb href="#film">
        Film
        <NavIcon slot="separator" icon={arrowForwardCircle}></NavIcon>
      </NavBreadcrumb>
    </NavBreadcrumbs>
  );
}
export default Example;
```
