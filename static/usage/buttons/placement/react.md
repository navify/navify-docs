```tsx
import React from 'react';
import { NavButton, NavButtons, NavTitle, NavToolbar } from '@navify/react';

function Example() {
  return (
    <>
      <NavToolbar>
        <NavButtons slot="start">
          <NavButton>Start</NavButton>
        </NavButtons>
        <NavTitle>Buttons</NavTitle>
        <NavButtons slot="end">
          <NavButton>End</NavButton>
        </NavButtons>
      </NavToolbar>

      <NavToolbar>
        <NavButtons slot="secondary">
          <NavButton>Secondary</NavButton>
        </NavButtons>
        <NavTitle>Buttons</NavTitle>
        <NavButtons slot="primary">
          <NavButton>Primary</NavButton>
        </NavButtons>
      </NavToolbar>
    </>
  );
}
export default Example;
```
