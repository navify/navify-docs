```html
<template>
  <nav-datetime
    presentation="date"
    :multiple="true"
    :value="['2022-06-03', '2022-06-13', '2022-06-29']"
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
