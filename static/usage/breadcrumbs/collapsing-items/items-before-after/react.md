```tsx
import React from 'react';
import { NavBreadcrumb, NavBreadcrumbs } from '@navify/react';
function Example() {
  return (
    <>
      <div>Before Collapse = 2</div>
      <NavBreadcrumbs maxItems={4} itemsBeforeCollapse={2}>
        <NavBreadcrumb href="#home">Home</NavBreadcrumb>
        <NavBreadcrumb href="#electronics">Electronics</NavBreadcrumb>
        <NavBreadcrumb href="#photography">Photography</NavBreadcrumb>
        <NavBreadcrumb href="#cameras">Cameras</NavBreadcrumb>
        <NavBreadcrumb href="#film">Film</NavBreadcrumb>
        <NavBreadcrumb href="#35mm">35 mm</NavBreadcrumb>
      </NavBreadcrumbs>

      <div className="nav-margin-top">Before Collapse = 0</div>
      <NavBreadcrumbs maxItems={4} itemsBeforeCollapse={0}>
        <NavBreadcrumb href="#home">Home</NavBreadcrumb>
        <NavBreadcrumb href="#electronics">Electronics</NavBreadcrumb>
        <NavBreadcrumb href="#photography">Photography</NavBreadcrumb>
        <NavBreadcrumb href="#cameras">Cameras</NavBreadcrumb>
        <NavBreadcrumb href="#film">Film</NavBreadcrumb>
        <NavBreadcrumb href="#35mm">35 mm</NavBreadcrumb>
      </NavBreadcrumbs>

      <div className="nav-margin-top">After Collapse = 2</div>
      <NavBreadcrumbs maxItems={4} itemsAfterCollapse={2}>
        <NavBreadcrumb href="#home">Home</NavBreadcrumb>
        <NavBreadcrumb href="#electronics">Electronics</NavBreadcrumb>
        <NavBreadcrumb href="#photography">Photography</NavBreadcrumb>
        <NavBreadcrumb href="#cameras">Cameras</NavBreadcrumb>
        <NavBreadcrumb href="#film">Film</NavBreadcrumb>
        <NavBreadcrumb href="#35mm">35 mm</NavBreadcrumb>
      </NavBreadcrumbs>

      <div className="nav-margin-top">Before Collapse = 2, After Collapse = 2</div>
      <NavBreadcrumbs maxItems={4} itemsBeforeCollapse={2} itemsAfterCollapse={2}>
        <NavBreadcrumb href="#home">Home</NavBreadcrumb>
        <NavBreadcrumb href="#electronics">Electronics</NavBreadcrumb>
        <NavBreadcrumb href="#photography">Photography</NavBreadcrumb>
        <NavBreadcrumb href="#cameras">Cameras</NavBreadcrumb>
        <NavBreadcrumb href="#film">Film</NavBreadcrumb>
        <NavBreadcrumb href="#35mm">35 mm</NavBreadcrumb>
      </NavBreadcrumbs>
    </>
  );
}
export default Example;
```
