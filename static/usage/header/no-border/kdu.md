```html
<template>
  <nav-header class="nav-no-border">
    <nav-toolbar>
      <nav-title>Header</nav-title>
    </nav-toolbar>
  </nav-header>
  <nav-content class="nav-padding">
    <h1>Content</h1>
  </nav-content>
</template>

<script lang="ts">
  import { NavContent, NavHeader, NavTitle, NavToolbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavContent, NavHeader, NavTitle, NavToolbar },
  });
</script>
```
