```html
<template>
  <nav-searchbar show-cancel-button="focus" placeholder="Show on Focus"></nav-searchbar>
  <nav-searchbar show-cancel-button="always" placeholder="Always Show"></nav-searchbar>
  <nav-searchbar show-cancel-button="never" placeholder="Never Show"></nav-searchbar>
  <nav-searchbar show-cancel-button="always" cancel-button-text="Custom Cancel" :cancel-button-icon="trash" placeholder="Custom Cancel Button"></nav-searchbar>
</template>

<script lang="ts">
  import { NavSearchbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';
  import { trash } from 'navicons/icons';

  export default defineComponent({
    components: { NavSearchbar },
    setup() {
      return { trash };
    }
  });
</script>
```
