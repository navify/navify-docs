```html
<template>
  <nav-header>
    <nav-toolbar>
      <nav-title>Header Toolbar</nav-title>
    </nav-toolbar>
  </nav-header>

  <nav-footer>
    <nav-toolbar>
      <nav-title>Footer Toolbar</nav-title>
    </nav-toolbar>
  </nav-footer>
</template>

<script lang="ts">
  import { NavFooter, NavHeader, NavTitle, NavToolbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavFooter, NavHeader, NavTitle, NavToolbar },
  });
</script>
```
