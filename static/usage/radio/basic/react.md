```tsx
import React from 'react';
import { NavItem, NavLabel, NavList, NavRadio, NavRadioGroup } from '@navify/react';

function Example() {
  return (
    <NavList>
      <NavRadioGroup value="strawberries">
        <NavItem>
          <NavLabel>Grapes</NavLabel>
          <NavRadio slot="end" value="grapes"></NavRadio>
        </NavItem>

        <NavItem>
          <NavLabel>Strawberries</NavLabel>
          <NavRadio slot="end" value="strawberries"></NavRadio>
        </NavItem>

        <NavItem>
          <NavLabel>Pineapple</NavLabel>
          <NavRadio slot="end" value="pineapple"></NavRadio>
        </NavItem>

        <NavItem>
          <NavLabel>Cherries (Disabled)</NavLabel>
          <NavRadio slot="end" value="cherries" disabled={true}></NavRadio>
        </NavItem>
      </NavRadioGroup>
    </NavList>
  );
}
export default Example;
```
