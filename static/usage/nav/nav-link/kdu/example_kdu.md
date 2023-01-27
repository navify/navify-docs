```html
<template>
  <nav-nav :root="component"></nav-nav>
</template>

<script lang="ts">
  import { NavNav } from '@navify/kdu';
  import PageOne from './PageOne.kdu';

  export default {
    components: { NavNav },
    data() {
      return {
        component: PageOne,
      };
    },
  };
</script>
```
