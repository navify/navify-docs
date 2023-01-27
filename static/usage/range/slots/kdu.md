```html
<template>
  <nav-range>
    <nav-icon slot="start" :icon="snowOutline"></nav-icon>
    <nav-icon slot="end" :icon="sunnyOutline"></nav-icon>
  </nav-range>
</template>

<script lang="ts">
  import { NavRange, NavIcon } from '@navify/kdu';
  import { snowOutline, sunnyOutline } from 'navicons/icons';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavRange, NavIcon },
    setup() {
      return {
        snowOutline,
        sunnyOutline,
      };
    },
  });
</script>
```
