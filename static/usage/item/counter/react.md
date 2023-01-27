```tsx
import React from 'react';
import { NavInput, NavItem, NavLabel } from '@navify/react';

function Example() {
  return (
    <>
      <NavItem counter={true}>
        <NavLabel position="floating">Default Counter</NavLabel>
        <NavInput maxlength={20}></NavInput>
      </NavItem>

      <NavItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
        <NavLabel position="floating">Custom Counter Format</NavLabel>
        <NavInput maxlength={20}></NavInput>
      </NavItem>
    </>
  );
}
export default Example;
```
