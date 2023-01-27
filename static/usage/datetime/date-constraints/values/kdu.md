```html
<template>
  <nav-datetime
    minute-values="0,15,30,45"
    day-values="5,10,15,20,25,30"
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
