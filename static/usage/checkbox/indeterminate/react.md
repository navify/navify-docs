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
      <NavCheckbox slot="start" indeterminate={true}></NavCheckbox>
      <NavLabel>Indeterminate checkbox</NavLabel>
    </NavItem>
  );
}
export default Example;
```