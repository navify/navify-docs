```html
<template>
  <nav-progress-bar value=".25" buffer=".5"></nav-progress-bar>
  <nav-progress-bar type="indeterminate"></nav-progress-bar>
</template>

<script lang="ts">
  import { NavProgressBar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavProgressBar }
  });
</script>

<style scoped>
  nav-progress-bar::part(track) {
    background: #f3e895;
  }

  nav-progress-bar::part(progress) {
    background: #09c567;
  }

  nav-progress-bar::part(stream) {
    background-image: radial-gradient(ellipse at center, #e475f3 0%, #e475f3 30%, transparent 30%);
  }
</style>
```
