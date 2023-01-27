```html
<template>
  <nav-item>
    <nav-label position="floating">Default input</nav-label>
    <nav-input placeholder="Enter text"></nav-input>
  </nav-item>

  <nav-item fill="solid">
    <nav-label position="floating">Solid input</nav-label>
    <nav-input placeholder="Enter text"></nav-input>
  </nav-item>

  <nav-item fill="outline">
    <nav-label position="floating">Outline input</nav-label>
    <nav-input placeholder="Enter text"></nav-input>
  </nav-item>
</template>

<script lang="ts">
  import { NavInput, NavItem, NavLabel } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavInput, NavItem, NavLabel },
  });
</script>
```
