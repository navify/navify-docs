```html
<template>
  <nav-content class="nav-padding">
    <h1>Page Three</h1>
    <nav-button @click="navigateBack">Go Back</nav-button>
    <nav-button @click="navigateToRoot">Go to Root</nav-button>
  </nav-content>
</template>

<script lang="ts">
  import { NavContent, NavButton } from '@navify/kdu';

  export default {
    components: { NavContent, NavButton },
    props: ['nav'],
    methods: {
      navigateBack() {
        const { nav } = this;
        nav.pop();
      },
      navigateToRoot() {
        const { nav } = this;
        nav.popToRoot();
      },
    },
  };
</script>
```
