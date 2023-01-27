```html
<template>
  <nav-datetime
    :show-default-buttons="true"
    done-text="All set"
    cancel-text="Never mind"
  ></nav-datetime>
</template>

<script lang="ts">
  import { NavDatetime } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavDatetime }
  });
</script>
```
