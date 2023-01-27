```html
<template>
  <nav-item-divider>
    <nav-label>Default</nav-label>
  </nav-item-divider>
  <nav-item-divider color="primary">
    <nav-label>Primary</nav-label>
  </nav-item-divider>
  <nav-item-divider color="secondary">
    <nav-label>Secondary</nav-label>
  </nav-item-divider>
  <nav-item-divider color="tertiary">
    <nav-label>Tertiary</nav-label>
  </nav-item-divider>
  <nav-item-divider color="success">
    <nav-label>Success</nav-label>
  </nav-item-divider>
  <nav-item-divider color="warning">
    <nav-label>Warning</nav-label>
  </nav-item-divider>
  <nav-item-divider color="danger">
    <nav-label>Danger</nav-label>
  </nav-item-divider>
  <nav-item-divider color="light">
    <nav-label>Light</nav-label>
  </nav-item-divider>
  <nav-item-divider color="medium">
    <nav-label>Medium</nav-label>
  </nav-item-divider>
  <nav-item-divider color="dark">
    <nav-label>Dark</nav-label>
  </nav-item-divider>
</template>

<script lang="ts">
  import { NavItemDivider, NavLabel } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItemDivider, NavLabel },
  });
</script>
```
