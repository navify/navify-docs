```html
<template>
  <nav-chip>Default</nav-chip>
  <nav-chip :disabled="true">Disabled</nav-chip>
  <nav-chip :outline="true">Outline</nav-chip>
</template>

<script lang="ts">
  import { NavChip } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavChip },
  });
</script>
```
