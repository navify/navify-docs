```html
<template>
  <nav-range :dual-knobs="true" :value="{ lower: 20, upper: 80 }"></nav-range>
</template>

<script lang="ts">
  import { NavContent, NavRange } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavContent, NavRange },
  });
</script>
```
