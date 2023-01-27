```tsx
import React from 'react';
import { NavBreadcrumb, NavBreadcrumbs, NavIcon, NavLabel } from '@navify/react';
import { camera, film, flash, home } from 'navicons/icons';

function Example() {
  return (
    <>
      <NavLabel>Icons at Start</NavLabel>
      <NavBreadcrumbs>
        <NavBreadcrumb href="#home">
          <NavIcon slot="start" icon={home}></NavIcon>
          Home
        </NavBreadcrumb>
        <NavBreadcrumb href="#electronics">
          <NavIcon slot="start" icon={flash}></NavIcon>
          Electronics
        </NavBreadcrumb>
        <NavBreadcrumb href="#cameras">
          <NavIcon slot="start" icon={camera}></NavIcon>
          Cameras
        </NavBreadcrumb>
        <NavBreadcrumb href="#film">
          <NavIcon slot="start" icon={film}></NavIcon>
          Film
        </NavBreadcrumb>
      </NavBreadcrumbs>

      <NavLabel class="nav-margin-top">Icons at End</NavLabel>
      <NavBreadcrumbs>
        <NavBreadcrumb href="#home">
          Home
          <NavIcon slot="end" icon={home}></NavIcon>
        </NavBreadcrumb>
        <NavBreadcrumb href="#electronics">
          Electronics
          <NavIcon slot="end" icon={flash}></NavIcon>
        </NavBreadcrumb>
        <NavBreadcrumb href="#cameras">
          Cameras
          <NavIcon slot="end" icon={camera}></NavIcon>
        </NavBreadcrumb>
        <NavBreadcrumb href="#film">
          Film
          <NavIcon slot="end" icon={film}></NavIcon>
        </NavBreadcrumb>
      </NavBreadcrumbs>
    </>
  );
}
export default Example;
```
