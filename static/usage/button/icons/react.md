```tsx
import React from 'react';
import { NavButton, NavIcon } from '@navify/react';
import { star } from 'navicons/icons';

function Example() {
  return (
    <>
      <NavButton>
        <NavIcon slot="start" icon={star}></NavIcon>
        Left Icon
      </NavButton>

      <NavButton>
        Right Icon
        <NavIcon slot="end" icon={star}></NavIcon>
      </NavButton>

      <NavButton>
        <NavIcon slot="icon-only" icon={star}></NavIcon>
      </NavButton>
    </>
  );
}
export default Example;
```
