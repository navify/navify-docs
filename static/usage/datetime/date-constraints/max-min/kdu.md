```html
<template>
  <nav-datetime
    value="2022-04-21T00:00:00"
    min="2022-03-01T00:00:00"
    max="2022-05-31T23:59:59"
  ></nav-datetime>
</template>

<script lang="ts">
  import { NavDatetime } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavDatetime },
  });
</script>
```
