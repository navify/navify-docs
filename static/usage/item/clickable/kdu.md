```html
<template>
  <nav-item href="#">
    <nav-label>Anchor Item</nav-label>
  </nav-item>

  <nav-item href="#" disabled="true">
    <nav-label>Disabled Anchor Item</nav-label>
  </nav-item>

  <nav-item button>
    <nav-label>Button Item</nav-label>
  </nav-item>

  <nav-item button disabled="true">
    <nav-label>Disabled Button Item</nav-label>
  </nav-item>
</template>

<script lang="ts">
  import { NavItem, NavLabel } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavLabel },
  });
</script>
```
