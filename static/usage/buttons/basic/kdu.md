```html
<template>
  <nav-toolbar>
    <nav-buttons slot="start">
      <nav-button>Button</nav-button>
    </nav-buttons>
    <nav-title>Default Buttons</nav-title>
  </nav-toolbar>
</template>

<script lang="ts">
  import { NavButton, NavButtons, NavTitle, NavToolbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton, NavButtons, NavTitle, NavToolbar },
  });
</script>
```
