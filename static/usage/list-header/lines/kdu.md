```html
<template>
  <nav-list>
    <nav-list-header>
      <nav-label>Default</nav-label>
    </nav-list-header>
    <nav-item>
      <nav-label>Item</nav-label>
    </nav-item>
    <nav-item>
      <nav-label>Item</nav-label>
    </nav-item>
  </nav-list>

  <nav-list>
    <nav-list-header lines="inset">
      <nav-label>Inset</nav-label>
    </nav-list-header>
    <nav-item>
      <nav-label>Item</nav-label>
    </nav-item>
    <nav-item>
      <nav-label>Item</nav-label>
    </nav-item>
  </nav-list>

  <nav-list>
    <nav-list-header lines="full">
      <nav-label>Full</nav-label>
    </nav-list-header>
    <nav-item>
      <nav-label>Item</nav-label>
    </nav-item>
    <nav-item>
      <nav-label>Item</nav-label>
    </nav-item>
  </nav-list>
</template>

<script lang="ts">
  import { NavItem, NavLabel, NavList, NavListHeader } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavLabel, NavList, NavListHeader },
  });
</script>
```
