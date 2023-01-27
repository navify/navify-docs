```tsx
import React from 'react';
import { NavFab, NavFabButton, NavFabList, NavIcon } from '@navify/react';
import { add, chevronBack, chevronDown, chevronForward, chevronUp } from 'navicons/icons';

function Example() {
  return (
    <NavFab slot="fixed" horizontal="center" vertical="center">
      <NavFabButton color="secondary">
        <NavIcon icon={add}></NavIcon>
      </NavFabButton>
      <NavFabList side="top">
        <NavFabButton color="primary">
          <NavIcon icon={chevronUp}></NavIcon>
        </NavFabButton>
      </NavFabList>
      <NavFabList side="end">
        <NavFabButton color="tertiary">
          <NavIcon icon={chevronForward}></NavIcon>
        </NavFabButton>
        <NavFabButton color="success">
          <NavIcon icon={chevronForward}></NavIcon>
        </NavFabButton>
      </NavFabList>
      <NavFabList side="bottom">
        <NavFabButton color="warning">
          <NavIcon icon={chevronDown}></NavIcon>
        </NavFabButton>
      </NavFabList>
      <NavFabList side="start">
        <NavFabButton color="danger">
          <NavIcon icon={chevronBack}></NavIcon>
        </NavFabButton>
        <NavFabButton color="dark">
          <NavIcon icon={chevronBack}></NavIcon>
        </NavFabButton>
      </NavFabList>
    </NavFab>
  );
}
export default Example;
```
