```html
<template>
  <nav-header>
    <nav-toolbar>
      <nav-title>Page One</nav-title>
    </nav-toolbar>
  </nav-header>
  <nav-content class="nav-padding">
    <h1>Page One</h1>
    <nav-nav-link router-direction="forward" :component="component">
      <nav-button>Go to Page Two</nav-button>
    </nav-nav-link>
  </nav-content>
</template>

<script lang="ts">
  import { NavHeader, NavTitle, NavToolbar, NavContent, NavNavLink, NavButton } from '@navify/kdu';
  import PageTwo from './PageTwo.kdu';

  export default {
    components: { NavHeader, NavTitle, NavToolbar, NavContent, NavNavLink, NavButton },
    data() {
      return {
        component: PageTwo,
      };
    },
  };
</script>
```
