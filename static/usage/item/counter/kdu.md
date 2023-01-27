```html
<template>
  <nav-item counter="true">
    <nav-label position="floating">Default Counter</nav-label>
    <nav-input maxlength="20"></nav-input>
  </nav-item>

  <nav-item id="custom-item" counter="true" :counterFormatter="customFormatter">
    <nav-label position="floating">Custom Counter Format</nav-label>
    <nav-input maxlength="20"></nav-input>
  </nav-item>
</template>

<script lang="ts">
  import { NavInput, NavItem, NavLabel } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavInput, NavItem, NavLabel },
    methods: {
      customFormatter(inputLength, maxLength) {
        return `${maxLength - inputLength} characters remaining`;
      }
    }
  });
</script>
```
