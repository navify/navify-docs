```html
<style>
  nav-chip {
    --background: #00213f;
    --color: #adefd1;
  }
</style>

<template>
  <nav-chip>Default</nav-chip>
</template>

<script lang="ts">
  import { NavChip } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavChip },
  });
</script>
```
