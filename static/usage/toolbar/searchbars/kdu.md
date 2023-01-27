```html
<template>
  <nav-header>
    <nav-toolbar>
      <nav-title>Toolbar</nav-title>
    </nav-toolbar>
    <nav-toolbar>
      <nav-searchbar></nav-searchbar>
    </nav-toolbar>
  </nav-header>
</template>

<script lang="ts">
  import { NavHeader, NavSearchbar, NavTitle, NavToolbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavHeader, NavSearchbar, NavTitle, NavToolbar },
  });
</script>
```
