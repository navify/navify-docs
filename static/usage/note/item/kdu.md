```html
<template>
  <nav-item>
    <nav-label>Label</nav-label>
    <nav-note slot="end">Note (End)</nav-note>
  </nav-item>

  <nav-item>
    <nav-note slot="start">Note (Start)</nav-note>
    <nav-label>Label</nav-label>
  </nav-item>
</template>

<script lang="ts">
  import { NavItem, NavLabel, NavNote } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavLabel, NavNote },
  });
</script>
```
