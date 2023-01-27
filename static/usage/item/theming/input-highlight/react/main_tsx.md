```tsx
import React from 'react';
import { NavInput, NavItem, NavLabel } from '@navify/react';

import './main.css';

function Example() {
  return (
    <>
      <NavItem lines="full" class="item-has-focus nav-touched">
        <NavLabel position="stacked">Custom Input Highlight: Focused</NavLabel>
        <NavInput></NavInput>
      </NavItem>

      <NavItem lines="full" class="item-has-focus nav-touched nav-valid">
        <NavLabel position="stacked">Custom Input Highlight: Focused & Valid</NavLabel>
        <NavInput></NavInput>
      </NavItem>

      <NavItem lines="full" class="item-has-focus nav-touched nav-invalid">
        <NavLabel position="stacked">Custom Input Highlight: Focused & Invalid</NavLabel>
        <NavInput></NavInput>
      </NavItem>
    </>
  );
}
export default Example;
```
