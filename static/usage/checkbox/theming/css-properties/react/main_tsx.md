```tsx
import React from 'react';
import {
  NavCheckbox,
  NavItem,
  NavLabel
} from '@navify/react';

import './main.css';

function Example() {
  return (
    <NavItem>
      <NavCheckbox slot="start"></NavCheckbox>
      <NavLabel>Themed checkbox</NavLabel>
    </NavItem>
  );
}
export default Example;
```