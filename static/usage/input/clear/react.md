```tsx
import React from 'react';
import { NavInput, NavItem, NavLabel, NavList } from '@navify/react';

function Example() {
  return (
    <NavList>
      <NavItem>
        <NavLabel position="stacked">Input with clear button</NavLabel>
        <NavInput clearInput={true} placeholder="Enter text to see clear button" value="Default value"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel position="stacked">Input with clear on edit</NavLabel>
        <NavInput clearOnEdit={true} placeholder="Enter text, leave the input, come back and type to clear"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel position="stacked">Password input</NavLabel>
        <NavInput type="password" placeholder="Enter text, leave the input, come back and type to clear"></NavInput>
      </NavItem>
    </NavList>
  );
}
export default Example;
```
