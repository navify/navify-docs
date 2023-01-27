```tsx
import React from 'react';
import {
  NavCheckbox,
  NavItem,
  NavLabel
} from '@navify/react';

function Example() {
  return (
    <NavItem>
      <NavCheckbox slot="start"></NavCheckbox>
      <NavLabel>I agree to the terms and conditions</NavLabel>
    </NavItem>
  );
}
export default Example;
```