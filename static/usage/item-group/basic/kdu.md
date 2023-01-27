```html
<template>
  <nav-item-group>
    <nav-item-divider>
      <nav-label>A</nav-label>
    </nav-item-divider>

    <nav-item>
      <nav-label>Angola</nav-label>
    </nav-item>
    <nav-item>
      <nav-label>Argentina</nav-label>
    </nav-item>
    <nav-item lines="none">
      <nav-label>Armenia</nav-label>
    </nav-item>
  </nav-item-group>

  <nav-item-group>
    <nav-item-divider>
      <nav-label>B</nav-label>
    </nav-item-divider>

    <nav-item>
      <nav-label>Bangladesh</nav-label>
    </nav-item>
    <nav-item>
      <nav-label>Belarus</nav-label>
    </nav-item>
    <nav-item lines="none">
      <nav-label>Belgium</nav-label>
    </nav-item>
  </nav-item-group>
</template>

<script lang="ts">
  import { NavItem, NavItemDivider, NavItemGroup, NavLabel } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavItemDivider, NavItemGroup, NavLabel },
  });
</script>
```
