```html
<template>
  <nav-input placeholder="Custom input" class="custom"></nav-input>
</template>

<script lang="ts">
  import { NavInput } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavInput },
  });
</script>

<style scoped>
  nav-input.custom {
    --background: #373737;
    --color: #fff;
    --placeholder-color: #ddd;
    --placeholder-opacity: .8;

    --padding-bottom: 10px;
    --padding-end: 10px;
    --padding-start: 10px;
    --padding-top: 10px;
  }
</style>
```
