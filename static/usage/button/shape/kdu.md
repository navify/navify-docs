```html
<template>
  <nav-button>Default</nav-button>
  <nav-button shape="round">Round</nav-button>
</template>

<script lang="ts">
  import { NavButton } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton },
  });
</script>
```
