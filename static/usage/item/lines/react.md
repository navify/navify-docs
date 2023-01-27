```tsx
import React from 'react';
import { NavIcon, NavItem, NavLabel } from '@navify/react';
import { informationCircle, star } from 'navicons/icons';

function Example() {
  return (
    <>
      <NavItem>
        <NavLabel>
          Default Item Lines
        </NavLabel>
      </NavItem>

      <NavItem lines="inset">
        <NavLabel>Item Lines Inset</NavLabel>
      </NavItem>

      <NavItem lines="full">
        <NavLabel>Item Lines Full</NavLabel>
      </NavItem>

      <NavItem lines="none">
        <NavLabel>Item Lines None</NavLabel>
      </NavItem>

      <NavItem>
        <NavIcon icon={star} slot="start"></NavIcon>
        <NavLabel>Default Item Lines</NavLabel>
        <NavIcon icon={informationCircle} slot="end"></NavIcon>
      </NavItem>

      <NavItem lines="inset">
        <NavIcon icon={star} slot="start"></NavIcon>
        <NavLabel>Item Lines Inset</NavLabel>
        <NavIcon icon={informationCircle} slot="end"></NavIcon>
      </NavItem>

      <NavItem lines="full">
        <NavIcon icon={star} slot="start"></NavIcon>
        <NavLabel>Item Lines Full</NavLabel>
        <NavIcon icon={informationCircle} slot="end"></NavIcon>
      </NavItem>

      <NavItem lines="none">
        <NavIcon icon={star} slot="start"></NavIcon>
        <NavLabel>Item Lines None</NavLabel>
        <NavIcon icon={informationCircle} slot="end"></NavIcon>
      </NavItem>
    </>
  );
}
export default Example;
```
