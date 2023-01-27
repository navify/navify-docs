```tsx
import React from 'react';
import { NavButton, NavButtons, NavTitle, NavToolbar } from '@navify/react';

function Example() {
  return (
    <NavToolbar>
      <NavButtons slot="start">
        <NavButton>Button</NavButton>
      </NavButtons>
      <NavTitle>Default Buttons</NavTitle>
    </NavToolbar>
  );
}
export default Example;
```
