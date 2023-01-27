```html
<template>
  <nav-datetime>
    <span slot="title">Select a Reservation Date</span>
  </nav-datetime>
</template>

<script lang="ts">
  import { NavDatetime } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavDatetime },
  });
</script>
```
