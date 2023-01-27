```html
<template>
  <nav-range :pin="true" :pin-formatter="pinFormatter"></nav-range>
</template>

<script lang="ts">
  import { NavRange } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavRange },
    setup() {
      return {
        pinFormatter: (value: number) => `${value}%`,
      };
    },
  });
</script>
```
