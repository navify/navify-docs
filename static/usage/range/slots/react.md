```tsx
import React from 'react';
import { NavRange, NavIcon } from '@navify/react';
import { snowOutline, sunnyOutline } from 'navicons/icons';

function Example() {
  return (
    <NavRange>
      <NavIcon slot="start" icon={snowOutline}></NavIcon>
      <NavIcon slot="end" icon={sunnyOutline}></NavIcon>
    </NavRange>
  );
}
export default Example;
```
