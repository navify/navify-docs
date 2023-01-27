```html
<template>
  <nav-searchbar></nav-searchbar>
  <nav-searchbar :search-icon="searchCircle" placeholder="Custom Search Icon"></nav-searchbar>
</template>

<script lang="ts">
  import { NavSearchbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';
  import { searchCircle } from 'navicons/icons';

  export default defineComponent({
    components: { NavSearchbar },
    setup() {
      return { searchCircle };
    }
  });
</script>
```
