```html
<template>
  <nav-item>
    <nav-checkbox slot="start"></nav-checkbox>
    <nav-label>Themed checkbox</nav-label>
  </nav-item>
</template>

<script lang="ts">
  import {
    NavCheckbox,
    NavItem,
    NavLabel
  } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: {
      NavCheckbox,
      NavItem,
      NavLabel
    }
  });
</script>

<style>
  nav-checkbox {
    --size: 32px;
    --background-checked: #6815ec;
  }
  
  nav-checkbox::part(container) {
    border-radius: 6px;
    border: 2px solid #6815ec;
  }
</style>
```
