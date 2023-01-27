```html
<template>
  <nav-note>Default Note</nav-note>
</template>

<script lang="ts">
  import { NavNote } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavNote },
  });
</script>

<style>
  nav-note {
    --color: #54dc98;
  }
</style>
```
