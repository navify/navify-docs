```html
<template>
  <nav-searchbar show-clear-button="focus" value="Show on Focus"></nav-searchbar>
  <nav-searchbar show-clear-button="always" value="Always Show"></nav-searchbar>
  <nav-searchbar show-clear-button="never" value="Never Show"></nav-searchbar>
  <nav-searchbar show-clear-button="always" :clear-icon="trashBin" value="Custom Clear Icon"></nav-searchbar>
</template>

<script lang="ts">
  import { NavSearchbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';
  import { trashBin } from 'navicons/icons';

  export default defineComponent({
    components: { NavSearchbar },
    setup() {
      return { trashBin };
    }
  });
</script>
```
