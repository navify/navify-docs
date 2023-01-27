```html
<template>
  <nav-searchbar></nav-searchbar>
  <nav-searchbar placeholder="Custom Placeholder"></nav-searchbar>
  <nav-searchbar disabled="true" placeholder="Disabled"></nav-searchbar>
  <nav-searchbar value="Value"></nav-searchbar>
  <nav-searchbar animated="true" placeholder="Animated"></nav-searchbar>
</template>

<script lang="ts">
  import { NavSearchbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavSearchbar },
  });
</script>
```
