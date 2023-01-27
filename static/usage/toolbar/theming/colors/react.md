```tsx
import React from 'react';
import { NavTitle, NavToolbar } from '@navify/react';

function Example() {
  return (
    <>
      <NavToolbar>
        <NavTitle>Default Toolbar</NavTitle>
      </NavToolbar>
      <NavToolbar color="primary">
        <NavTitle>Primary Toolbar</NavTitle>
      </NavToolbar>
      <NavToolbar color="secondary">
        <NavTitle>Secondary Toolbar</NavTitle>
      </NavToolbar>
      <NavToolbar color="tertiary">
        <NavTitle>Tertiary Toolbar</NavTitle>
      </NavToolbar>
      <NavToolbar color="success">
        <NavTitle>Success Toolbar</NavTitle>
      </NavToolbar>
      <NavToolbar color="warning">
        <NavTitle>Warning Toolbar</NavTitle>
      </NavToolbar>
      <NavToolbar color="danger">
        <NavTitle>Danger Toolbar</NavTitle>
      </NavToolbar>
      <NavToolbar color="light">
        <NavTitle>Light Toolbar</NavTitle>
      </NavToolbar>
      <NavToolbar color="medium">
        <NavTitle>Medium Toolbar</NavTitle>
      </NavToolbar>
      <NavToolbar color="dark">
        <NavTitle>Dark Toolbar</NavTitle>
      </NavToolbar>
    </>
  );
}
export default Example;
```
