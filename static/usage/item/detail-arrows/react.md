```tsx
import React from 'react';
import { NavItem, NavLabel } from '@navify/react';
import { caretForwardOutline } from 'navicons/icons';

function Example() {
  return (
    <>
      <NavItem detail={true}>
        <NavLabel>
          <h3>Text Item</h3>
          <p>Detail set to true - detail arrow displays on both modes</p>
        </NavLabel>
      </NavItem>

      <NavItem button>
        <NavLabel>
          <h3>Button Item</h3>
          <p>Default detail - detail arrow displays on iOS only</p>
        </NavLabel>
      </NavItem>

      <NavItem button detail={true}>
        <NavLabel>
          <h3>Button Item</h3>
          <p>Detail set to true - detail arrow displays on both modes</p>
        </NavLabel>
      </NavItem>

      <NavItem button detail={false}>
        <NavLabel>
          <h3>Button Item</h3>
          <p>Detail set to false - detail arrow hidden on both modes</p>
        </NavLabel>
      </NavItem>

      <NavItem button detail={true} detailIcon={caretForwardOutline}>
        <NavLabel>
          <h3>Button Item</h3>
          <p>Detail set to true - detail arrow displays on both modes</p>
          <p>Detail icon set to caret-forward-outline</p>
        </NavLabel>
      </NavItem>
    </>
  );
}
export default Example;
```
