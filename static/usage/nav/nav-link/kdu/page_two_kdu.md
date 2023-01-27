```html
<template>
  <nav-header>
    <nav-toolbar>
      <nav-buttons slot="start">
        <nav-back-button></nav-back-button>
      </nav-buttons>
      <nav-title>Page Two</nav-title>
    </nav-toolbar>
  </nav-header>
  <nav-content class="nav-padding">
    <h1>Page Two</h1>
    <nav-nav-link router-direction="forward" :component="component">
      <nav-button>Go to Page Three</nav-button>
    </nav-nav-link>
  </nav-content>
</template>

<script lang="ts">
  import {
    NavHeader,
    NavTitle,
    NavToolbar,
    NavContent,
    NavNavLink,
    NavButton,
    NavButtons,
    NavBackButton,
  } from '@navify/kdu';
  import PageThree from './PageThree.kdu';

  export default {
    components: {
      NavHeader,
      NavTitle,
      NavToolbar,
      NavContent,
      NavNavLink,
      NavButton,
      NavButtons,
      NavBackButton,
    },
    data() {
      return {
        component: PageThree,
      };
    },
  };
</script>
```
