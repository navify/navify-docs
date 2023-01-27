```html
<template>
  <nav-button size="small">Small</nav-button>
  <nav-button size="default">Default</nav-button>
  <nav-button size="large">Large</nav-button>
</template>

<script lang="ts">
  import { NavButton } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton },
  });
</script>
```
