```html
<template>
  <nav-list>
    <nav-item>
      <nav-label>Badges styled</nav-label>
      <nav-badge>1</nav-badge>
    </nav-item>
  </nav-list>
</template>

<script>
  import { NavBadge, NavItem, NavLabel, NavList } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavBadge, NavItem, NavLabel, NavList },
  });
</script>

<style>
  nav-badge {
    --background: purple;
    --color: white;
    --padding-end: 20px;
    --padding-start: 20px;
  }
</style>
```
