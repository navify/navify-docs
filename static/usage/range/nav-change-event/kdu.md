```html
<template>
  <nav-range @navChange="onNavChange"></nav-range>
  <nav-label>navChange emitted value: {{lastEmittedValue}}</nav-label>
</template>

<script lang="ts">
  import { NavLabel, NavRange } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavLabel, NavRange },
    data() {
      return {
        lastEmittedValue: '',
      };
    },
    methods: {
      onNavChange({ detail }) {
        this.lastEmittedValue = detail.value;
      },
    },
  });
</script>
```
