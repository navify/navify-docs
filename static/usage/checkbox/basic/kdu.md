```html
<template>
  <nav-item>
    <nav-checkbox slot="start"></nav-checkbox>
    <nav-label>I agree to the terms and conditions</nav-label>
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
