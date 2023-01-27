```html
<template>
  <nav-list>
    <nav-item>
      <nav-badge slot="start">11</nav-badge>
      <nav-label>Badge in start slot</nav-label>
    </nav-item>
    <nav-item>
      <nav-badge slot="end">22</nav-badge>
      <nav-label>Badge in end slot</nav-label>
    </nav-item>
  </nav-list>
</template>

<script lang="ts">
  import { NavBadge, NavItem, NavLabel, NavList } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavBadge, NavItem, NavLabel, NavList },
  });
</script>
```
