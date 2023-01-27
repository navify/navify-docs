```tsx
import React from 'react';
import { NavItem, NavLabel, NavList, NavSelect, NavSelectOption } from '@navify/react';
function Example() {
  return (
    <NavList>
      <NavItem>
        <NavLabel>Alert Interface</NavLabel>
        <NavSelect placeholder="Select fruit" okText="Choose Fruit" cancelText="Cancel Choice">
          <NavSelectOption value="apples">Apples</NavSelectOption>
          <NavSelectOption value="oranges">Oranges</NavSelectOption>
          <NavSelectOption value="bananas">Bananas</NavSelectOption>
        </NavSelect>
      </NavItem>
      <NavItem>
        <NavLabel>Action Sheet Interface</NavLabel>
        <NavSelect interface="action-sheet" placeholder="Select fruit" cancelText="Cancel Choice">
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
