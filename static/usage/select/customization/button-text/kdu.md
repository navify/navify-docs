```html
<template>
  <nav-list>
    <nav-item>
      <nav-label>Alert Interface</nav-label>
      <nav-select placeholder="Select fruit" ok-text="Choose Fruit" cancel-text="Cancel Choice">
        <nav-select-option value="apples">Apples</nav-select-option>
        <nav-select-option value="oranges">Oranges</nav-select-option>
        <nav-select-option value="bananas">Bananas</nav-select-option>
      </nav-select>
    </nav-item>
    <nav-item>
      <nav-label>Action Sheet Interface</nav-label>
      <nav-select interface="action-sheet" placeholder="Select fruit" cancel-text="Cancel Choice">
        <nav-select-option value="apples">Apples</nav-select-option>
        <nav-select-option value="oranges">Oranges</nav-select-option>
        <nav-select-option value="bananas">Bananas</nav-select-option>
      </nav-select>
    </nav-item>
  </nav-list>
</template>

<script>
  import { NavItem, NavLabel, NavList, NavSelect, NavSelectOption } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavLabel, NavList, NavSelect, NavSelectOption },
  });
</script>
```
