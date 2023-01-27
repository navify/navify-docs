```html
<template>
  <nav-spinner></nav-spinner>
</template>

<script lang="ts">
  import { NavSpinner } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavSpinner },
  });
</script>

<style scoped>
  nav-spinner {
    --color: #54dc98;
  }
</style>
```
