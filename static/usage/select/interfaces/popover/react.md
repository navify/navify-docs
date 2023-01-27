```tsx
import React from 'react';
import { NavList, NavItem, NavSelect, NavSelectOption } from '@navify/react';
function Example() {
  return (
    <NavList>
      <NavItem>
        <NavSelect interface="popover" placeholder="Select fruit">
          <NavSelectOption value="apples">Apples</NavSelectOption>
          <NavSelectOption value="oranges">Oranges</NavSelectOption>
          <NavSelectOption value="bananas">Bananas</NavSelectOption>
        </NavSelect>
      </NavItem>
    </NavList>
  );
}
export default Example;
```
