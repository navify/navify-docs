```tsx
import React from 'react';
import { NavButton, NavIcon, NavItem, NavLabel } from '@navify/react';
import { home, navigate, star } from 'navicons/icons';

function Example() {
  return (
    <>
      <NavItem>
        <NavButton slot="start">
          Start
        </NavButton>
        <NavLabel>Default Buttons</NavLabel>
        <NavButton slot="end">
          End
        </NavButton>
      </NavItem>

      <NavItem>
        <NavButton slot="start">
          Start
          <NavIcon icon={home} slot="end"></NavIcon>
        </NavButton>
        <NavLabel>Buttons with Icons</NavLabel>
        <NavButton slot="end">
          <NavIcon icon={star} slot="end"></NavIcon>
          End
        </NavButton>
      </NavItem>

      <NavItem>
        <NavButton slot="start">
          <NavIcon slot="icon-only" icon={navigate}></NavIcon>
        </NavButton>
        <NavLabel>Icon only Buttons</NavLabel>
        <NavButton slot="end">
          <NavIcon slot="icon-only" icon={star}></NavIcon>
        </NavButton>
      </NavItem>

      <NavItem>
        <NavLabel>Button Sizes</NavLabel>
        <NavButton slot="end" size="small">
          Small
        </NavButton>
        <NavButton slot="end" size="default">
          Default
        </NavButton>
        <NavButton slot="end" size="large">
          Large
        </NavButton>
      </NavItem>
    </>
  );
}
export default Example;
```
