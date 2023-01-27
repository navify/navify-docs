```tsx
import React from 'react';
import { NavBreadcrumb, NavBreadcrumbs } from '@navify/react';

import './main.css';

function Example() {
  return (
    <NavBreadcrumbs>
      <NavBreadcrumb href="#home">Home</NavBreadcrumb>
      <NavBreadcrumb href="#electronics">Electronics</NavBreadcrumb>
      <NavBreadcrumb href="#cameras">Cameras</NavBreadcrumb>
      <NavBreadcrumb href="#film">Film</NavBreadcrumb>
    </NavBreadcrumbs>
  );
}
export default Example;
```
