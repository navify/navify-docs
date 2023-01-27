```tsx
import React from 'react';
import { NavItem, NavLabel, NavList, NavRadio, NavRadioGroup } from '@navify/react';

function Example() {
  return (
    <NavList>
      <NavRadioGroup allowEmptySelection={true} value="turtles">
        <NavItem>
          <NavLabel>Dogs</NavLabel>
          <NavRadio slot="end" value="dogs"></NavRadio>
        </NavItem>

        <NavItem>
          <NavLabel>Cats</NavLabel>
          <NavRadio slot="end" value="cats"></NavRadio>
        </NavItem>

        <NavItem>
          <NavLabel>Turtles</NavLabel>
          <NavRadio slot="end" value="turtles"></NavRadio>
        </NavItem>

        <NavItem>
          <NavLabel>Fish</NavLabel>
          <NavRadio slot="end" value="fish"></NavRadio>
        </NavItem>
      </NavRadioGroup>
    </NavList>
  );
}
export default Example;
```
