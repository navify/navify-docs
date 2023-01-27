```html
<template>
  <nav-content class="nav-padding">
    <h1>Page Two</h1>
    <nav-button @click="navigateToPageThree">Go to Page Three</nav-button>
  </nav-content>
</template>

<script lang="ts">
  import { NavContent, NavButton } from '@navify/kdu';
  import PageThree from './PageThree.kdu';

  export default {
    components: { NavContent, NavButton },
    props: ['nav'],
    methods: {
      navigateToPageThree() {
        const { nav } = this;
        nav.push(PageThree, { nav });
      },
    },
  };
</script>
```
