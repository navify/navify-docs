```html
<template>
  <nav-button expand="block">Block</nav-button>
  <nav-button expand="full">Full</nav-button>
</template>

<script lang="ts">
  import { NavButton } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton },
  });
</script>
```
