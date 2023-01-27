```html
<template>
  <nav-list>
    <nav-item>
      <nav-select placeholder="Select fruit">
        <nav-select-option value="apples">Apples</nav-select-option>
        <nav-select-option value="oranges">Oranges</nav-select-option>
        <nav-select-option value="bananas">Bananas</nav-select-option>
      </nav-select>
    </nav-item>
  </nav-list>
</template>

<script>
  import { NavItem, NavList, NavSelect, NavSelectOption } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavList, NavSelect, NavSelectOption },
  });
</script>
```
