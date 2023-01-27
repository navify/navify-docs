```html
<template>
  <nav-datetime locale="en-GB" hour-cycle="h12"></nav-datetime>
</template>

<script lang="ts">
  import { NavDatetime } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavDatetime },
  });
</script>
```
