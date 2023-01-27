```html
<template>
  <nav-backdrop :visible="true"></nav-backdrop>
  <div class="nav-page">
    <nav-header>
      <nav-toolbar>
        <nav-title>Backdrop</nav-title>
      </nav-toolbar>
    </nav-header>
    <nav-content class="nav-padding">
      <nav-item>
        <nav-checkbox slot="start"></nav-checkbox>
        <nav-label>Checkbox</nav-label>
      </nav-item>
      <nav-button expand="block">Button</nav-button>
    </nav-content>
  </div>
</template>
<script lang="ts">
  import {
    NavBackdrop,
    NavHeader,
    NavToolbar,
    NavTitle,
    NavContent,
    NavItem,
    NavCheckbox,
    NavLabel,
    NavButton,
  } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavBackdrop, NavHeader, NavToolbar, NavTitle, NavContent, NavItem, NavCheckbox, NavLabel, NavButton },
  });
</script>
```
