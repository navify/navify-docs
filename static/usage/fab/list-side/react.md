```tsx
import React from 'react';
import { NavFab, NavFabButton, NavFabList, NavIcon } from '@navify/react';
import { add, chevronBack, chevronDown, chevronForward, chevronUp } from 'navicons/icons';

function Example() {
  return (
    <NavFab slot="fixed" horizontal="center" vertical="center">
      <NavFabButton>
        <NavIcon icon={add}></NavIcon>
      </NavFabButton>
      <NavFabList side="top">
        <NavFabButton>
          <NavIcon icon={chevronUp}></NavIcon>
        </NavFabButton>
      </NavFabList>
      <NavFabList side="end">
        <NavFabButton>
          <NavIcon icon={chevronForward}></NavIcon>
        </NavFabButton>
        <NavFabButton>
          <NavIcon icon={chevronForward}></NavIcon>
        </NavFabButton>
      </NavFabList>
      <NavFabList side="bottom">
        <NavFabButton>
          <NavIcon icon={chevronDown}></NavIcon>
        </NavFabButton>
      </NavFabList>
      <NavFabList side="start">
        <NavFabButton>
          <NavIcon icon={chevronBack}></NavIcon>
        </NavFabButton>
        <NavFabButton>
          <NavIcon icon={chevronBack}></NavIcon>
        </NavFabButton>
      </NavFabList>
    </NavFab>
  );
}
export default Example;
```
