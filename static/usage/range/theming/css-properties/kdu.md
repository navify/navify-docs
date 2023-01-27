```html
<style>
  nav-range {
    --bar-background: #a2d2ff;
    --bar-background-active: #bde0fe;
    --bar-height: 8px;
    --bar-border-radius: 8px;
    --knob-background: #ffc8dd;
    --knob-size: 40px;
    --pin-background: #ffafcc;
    --pin-color: #fff;
  }
</style>

<template>
  <nav-range :value="50" :pin="true"></nav-range>
</template>

<script lang="ts">
  import { NavRange } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavRange },
  });
</script>
```
