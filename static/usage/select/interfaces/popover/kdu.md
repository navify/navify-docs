```html
<template>
  <nav-list>
    <nav-item>
      <nav-select interface="popover" placeholder="Select fruit">
        <NavSelectOption value="apples">Apples</NavSelectOption>
        <NavSelectOption value="oranges">Oranges</NavSelectOption>
        <NavSelectOption value="bananas">Bananas</NavSelectOption>
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
