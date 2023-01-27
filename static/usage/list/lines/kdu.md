```html
<template>
  <nav-list lines="full">
    <nav-item>
      <nav-label>Full Lines</nav-label>
    </nav-item>
    <nav-item>
      <nav-label>Full Lines</nav-label>
    </nav-item>
    <nav-item>
      <nav-label>Full Lines</nav-label>
    </nav-item>
  </nav-list>

  <nav-list lines="inset">
    <nav-item>
      <nav-label>Inset Lines</nav-label>
    </nav-item>
    <nav-item>
      <nav-label>Inset Lines</nav-label>
    </nav-item>
    <nav-item>
      <nav-label>Inset Lines</nav-label>
    </nav-item>
  </nav-list>

  <nav-list lines="none">
    <nav-item>
      <nav-label>No Lines</nav-label>
    </nav-item>
    <nav-item>
      <nav-label>No Lines</nav-label>
    </nav-item>
    <nav-item>
      <nav-label>No Lines</nav-label>
    </nav-item>
  </nav-list>
</template>

<script lang="ts">
  import { NavItem, NavLabel, NavList } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavLabel, NavList },
  });
</script>
```
