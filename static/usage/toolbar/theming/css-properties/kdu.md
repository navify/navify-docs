```html
<template>
  <nav-toolbar>
    <nav-title>Custom Toolbar</nav-title>
  </nav-toolbar>
</template>

<script lang="ts">
  import { NavTitle, NavToolbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavTitle, NavToolbar },
  });
</script>

<style scoped>
  nav-toolbar {
    --background: #19422d;
    --color: white;

    --border-color: #f24aec;
    --border-width: 4px 0;
    --border-style: double;

    --min-height: 80px;
    --padding-top: 20px;
    --padding-bottom: 20px;
  }
</style>
```
