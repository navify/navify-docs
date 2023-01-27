```html
<template>
  <nav-header>
    <nav-toolbar>
      <nav-title>Toolbar</nav-title>
      <nav-progress-bar type="indeterminate"></nav-progress-bar>
    </nav-toolbar>
  </nav-header>
</template>

<script lang="ts">
  import { NavHeader, NavProgressBar, NavTitle, NavToolbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavHeader, NavProgressBar, NavTitle, NavToolbar },
  });
</script>
```
