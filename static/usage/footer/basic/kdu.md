```html
<template>
  <nav-content class="nav-padding">
    <h1>Content</h1>
  </nav-content>
  <nav-footer>
    <nav-toolbar>
      <nav-title>Footer</nav-title>
    </nav-toolbar>
  </nav-footer>
</template>

<script lang="ts">
  import { NavContent, NavFooter, NavTitle, NavToolbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavContent, NavFooter, NavTitle, NavToolbar },
  });
</script>
```
