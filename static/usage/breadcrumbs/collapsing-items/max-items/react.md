```tsx
import React from 'react';
import { NavBreadcrumb, NavBreadcrumbs } from '@navify/react';
function Example() {
  return (
    <NavBreadcrumbs maxItems={4}>
      <NavBreadcrumb href="#home">Home</NavBreadcrumb>
      <NavBreadcrumb href="#electronics">Electronics</NavBreadcrumb>
      <NavBreadcrumb href="#photography">Photography</NavBreadcrumb>
      <NavBreadcrumb href="#cameras">Cameras</NavBreadcrumb>
      <NavBreadcrumb href="#film">Film</NavBreadcrumb>
      <NavBreadcrumb href="#35mm">35 mm</NavBreadcrumb>
    </NavBreadcrumbs>
  );
}
export default Example;
```
