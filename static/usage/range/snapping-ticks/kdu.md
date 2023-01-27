```html
<template>
  <nav-range :ticks="true" :snaps="true" :min="0" :max="10"></nav-range>
</template>

<script lang="ts">
  import { NavRange } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavRange },
  });
</script>
```
