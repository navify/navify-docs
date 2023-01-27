```html
<template>
  <nav-toggle :enable-on-off-labels="true"></nav-toggle>
</template>

<script lang="ts">
  import { NavToggle } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavToggle },
  });
</script>
```
