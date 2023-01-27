```html
<template>
  <nav-list>        
    <nav-item>
      <nav-label>Alert</nav-label>
      <nav-select :interface-options="customAlertOptions" interface="alert" placeholder="Select One">
        <nav-select-option value="bacon">Bacon</nav-select-option>
        <nav-select-option value="onions">Onions</nav-select-option>
        <nav-select-option value="pepperoni">Pepperoni</nav-select-option>
      </nav-select>
    </nav-item>
        
    <nav-item>
      <nav-label>Popover</nav-label>
      <nav-select :interface-options="customPopoverOptions" interface="popover" placeholder="Select One">
        <nav-select-option value="brown">Brown</nav-select-option>
        <nav-select-option value="blonde">Blonde</nav-select-option>
        <nav-select-option value="red">Red</nav-select-option>
      </nav-select>
    </nav-item>
        
    <nav-item>
      <nav-label>Action Sheet</nav-label>
      <nav-select :interface-options="customActionSheetOptions" interface="action-sheet" placeholder="Select One">
        <nav-select-option value="red">Red</nav-select-option>
        <nav-select-option value="green">Green</nav-select-option>
        <nav-select-option value="blue">Blue</nav-select-option>
      </nav-select>
    </nav-item>
  </nav-list>
</template>

<script>
  import { NavItem, NavLabel, NavList, NavSelect, NavSelectOption } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavLabel, NavList, NavSelect, NavSelectOption },
    setup() {
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

      return {
        customAlertOptions,
        customPopoverOptions,
        customActionSheetOptions
      }
    }
  });
</script>
```
