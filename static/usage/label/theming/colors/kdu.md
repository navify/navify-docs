```html
<template>
  <nav-label>Default</nav-label>
  <nav-label color="primary">Primary</nav-label>
  <nav-label color="secondary">Secondary</nav-label>
  <nav-label color="tertiary">Tertiary</nav-label>
  <nav-label color="success">Success</nav-label>
  <nav-label color="warning">Warning</nav-label>
  <nav-label color="danger">Danger</nav-label>
  <nav-label color="light">Light</nav-label>
  <nav-label color="medium">Medium</nav-label>
  <nav-label color="dark">Dark</nav-label>
</template>

<script lang="ts">
  import { NavLabel } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavLabel },
  });
</script>
```
