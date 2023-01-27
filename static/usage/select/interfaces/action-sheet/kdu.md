```html
<template>
  <nav-list>
    <nav-item>
      <nav-select interface="action-sheet" placeholder="Select fruit">
        <nav-select-option value="apples">Apples</nav-select-option>
        <nav-select-option value="oranges">Oranges</nav-select-option>
        <nav-select-option value="bananas">Bananas</nav-select-option>
      </nav-select>
    </nav-item>
  </nav-list>
</template>

<script>
  import { NavList, NavItem, NavSelect, NavSelectOption } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavList, NavItem, NavSelect, NavSelectOption },
  });
</script>
```
