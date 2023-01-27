```html
<template>
  <nav-button>Default</nav-button>
  <nav-button fill="clear">Clear</nav-button>
  <nav-button fill="outline">Outline</nav-button>
  <nav-button fill="solid">Solid</nav-button>
</template>

<script lang="ts">
  import { NavButton } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton },
  });
</script>
```
