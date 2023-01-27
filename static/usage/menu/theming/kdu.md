```html
<template>
  <nav-menu content-id="main-content">
    <nav-header>
      <nav-toolbar color="tertiary">
        <nav-title>Menu Content</nav-title>
      </nav-toolbar>
    </nav-header>
    <nav-content class="nav-padding">This is the menu content.</nav-content>
  </nav-menu>
  <nav-page id="main-content">
    <nav-header>
      <nav-toolbar>
        <nav-buttons slot="start">
          <nav-menu-button></nav-menu-button>
        </nav-buttons>
        <nav-title>Menu</nav-title>
      </nav-toolbar>
    </nav-header>
    <nav-content class="nav-padding">
      Tap the button in the toolbar to open the menu.
    </nav-content>
  </nav-page>
</template>

<script lang="ts">
  import {
    NavButtons,
    NavContent,
    NavHeader,
    NavMenu,
    NavMenuButton,
    NavPage,
    NavTitle,
    NavToolbar
  } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: {
      NavButtons,
      NavContent,
      NavHeader,
      NavMenu,
      NavMenuButton,
      NavPage,
      NavTitle,
      NavToolbar
    },
  });
</script>

<style scoped>
  nav-menu::part(backdrop) {
    background-color: rgba(255, 0, 255, 0.5);
  }

  nav-menu::part(container) {
    border-radius: 0 20px 20px 0;

    box-shadow: 4px 0px 16px rgba(255, 0, 255, 0.18);
  }
</style>
```
