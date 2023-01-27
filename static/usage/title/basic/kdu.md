```html
<template>
  <nav-header>
    <nav-toolbar>
      <nav-title>Title</nav-title>
    </nav-toolbar>
  </nav-header>
</template>

<script lang="ts">
  import { NavHeader, NavToolbar, NavTitle } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavHeader, NavToolbar, NavTitle },
  });
</script>
```
