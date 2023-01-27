```html
<template>
  <nav-content class="nav-padding">Hello World!</nav-content>
</template>

<script lang="ts">
import { NavContent } from '@navify/kdu';
import { defineComponent } from 'kdu';

export default defineComponent({
  name: 'Popover',
  components: { NavContent }
});
</script>
```