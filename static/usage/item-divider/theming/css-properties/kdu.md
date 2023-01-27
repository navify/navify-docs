```html
<template>
  <nav-item-divider>
    <nav-label>
      Item Divider
    </nav-label>
  </nav-item-divider>
</template>

<script lang="ts">
  import { NavItemDivider } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItemDivider }
  });
</script>

<style scoped>
  nav-item-divider {
    --background: #19422d;
    --color: #fff;

    --padding-top: 10px;
    --padding-bottom: 10px;
    --padding-start: 20px;
    --padding-end: 20px;
  }
</style>
```
