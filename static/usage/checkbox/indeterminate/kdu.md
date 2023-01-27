```html
<template>
  <nav-item>
    <nav-checkbox slot="start" :indeterminate="true"></nav-checkbox>
    <nav-label>Indeterminate checkbox</nav-label>
  </nav-item>
</template>

<script lang="ts">
  import {
    NavCheckbox,
    NavItem,
    NavLabel
  } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: {
      NavCheckbox,
      NavItem,
      NavLabel
    }
  });
</script>
```
