```html
<template>
  <nav-header>
    <nav-toolbar>
      <nav-buttons slot="start">
        <nav-back-button></nav-back-button>
      </nav-buttons>
      <nav-title>Page Three</nav-title>
    </nav-toolbar>
  </nav-header>
  <nav-content class="nav-padding">
    <h1>Page Three</h1>
  </nav-content>
</template>

<script lang="ts">
  import { NavHeader, NavTitle, NavToolbar, NavContent, NavButtons, NavBackButton } from '@navify/kdu';

  export default {
    components: { NavHeader, NavTitle, NavToolbar, NavContent, NavButtons, NavBackButton },
  };
</script>
```
