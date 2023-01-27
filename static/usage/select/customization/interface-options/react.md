```tsx
import React from 'react';
import { NavItem, NavLabel, NavList, NavSelect, NavSelectOption } from '@navify/react';
function Example() {
  const customAlertOptions = {
    header: 'Pizza Toppings',
    subHeader: 'Select your favorite topping',
    message: 'Choose only one',
    translucent: true
  };

  const customPopoverOptions = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };

  const customActionSheetOptions = {
    header: 'Colors',
    subHeader: 'Select your favorite color'
  };

  return (
    <NavList>        
      <NavItem>
        <NavLabel>Alert</NavLabel>
        <NavSelect interfaceOptions={customAlertOptions} interface="alert" placeholder="Select One">
          <NavSelectOption value="bacon">Bacon</NavSelectOption>
          <NavSelectOption value="onions">Onions</NavSelectOption>
          <NavSelectOption value="pepperoni">Pepperoni</NavSelectOption>
        </NavSelect>
      </NavItem>
          
      <NavItem>
        <NavLabel>Popover</NavLabel>
        <NavSelect interfaceOptions={customPopoverOptions} interface="popover" placeholder="Select One">
          <NavSelectOption value="brown">Brown</NavSelectOption>
          <NavSelectOption value="blonde">Blonde</NavSelectOption>
          <NavSelectOption value="red">Red</NavSelectOption>
        </NavSelect>
      </NavItem>
          
      <NavItem>
        <NavLabel>Action Sheet</NavLabel>
        <NavSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Select One">
          <NavSelectOption value="red">Red</NavSelectOption>
          <NavSelectOption value="green">Green</NavSelectOption>
          <NavSelectOption value="blue">Blue</NavSelectOption>
        </NavSelect>
      </NavItem>
    </NavList>
  );
}
export default Example;
```
