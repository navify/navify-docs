```tsx
import React from 'react';
import { NavFab, NavFabButton, NavIcon } from '@navify/react';
import { add } from 'navicons/icons';

function Example() {
  return (
    <NavFab>
      <NavFabButton>
        <NavIcon icon={add}></NavIcon>
      </NavFabButton>
    </NavFab>
  );
}
export default Example;
```
