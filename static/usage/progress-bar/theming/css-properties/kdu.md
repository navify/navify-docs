```html
<template>
  <nav-progress-bar :value=".25" :buffer=".5"></nav-progress-bar>
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
  nav-progress-bar {
    --background: #f3e895;
    --progress-background: #09c567;
  }
</style>
```
