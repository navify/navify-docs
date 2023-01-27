```html
<template>
  <nav-note>Default Note</nav-note>
  <nav-note color="primary">Primary Note</nav-note>
  <nav-note color="secondary">Secondary Note</nav-note>
  <nav-note color="tertiary">Tertiary Note</nav-note>
  <nav-note color="success">Success Note</nav-note>
  <nav-note color="warning">Warning Note</nav-note>
  <nav-note color="danger">Danger Note</nav-note>
  <nav-note color="light">Light Note</nav-note>
  <nav-note color="medium">Medium Note</nav-note>
  <nav-note color="dark">Dark Note</nav-note>
</template>

<script lang="ts">
  import { NavNote } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavNote },
  });
</script>
```
