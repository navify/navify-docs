```html
<template>
  <nav-content class="nav-padding">
    <h1>Page One</h1>
    <nav-button @click="navigateToPageTwo">Go to Page Two</nav-button>
  </nav-content>
</template>

<script lang="ts">
  import { NavContent, NavButton } from '@navify/kdu';
  import PageTwo from './PageTwo.kdu';

  export default {
    components: { NavContent, NavButton },
    props: ['nav'],
    methods: {
      navigateToPageTwo() {
        const { nav } = this;
        nav.push(PageTwo, { nav });
      },
    },
  };
</script>
```
