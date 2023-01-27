```html
<template>
  <nav-chip>Default</nav-chip>
  <nav-chip color="primary">Primary</nav-chip>
  <nav-chip color="secondary">Secondary</nav-chip>
  <nav-chip color="tertiary">Tertiary</nav-chip>
  <nav-chip color="success">Success</nav-chip>
  <nav-chip color="warning">Warning</nav-chip>
  <nav-chip color="danger">Danger</nav-chip>
  <nav-chip color="light">Light</nav-chip>
  <nav-chip color="medium">Medium</nav-chip>
  <nav-chip color="dark">Dark</nav-chip>
</template>

<script lang="ts">
  import { NavChip } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavChip },
  });
</script>
```
