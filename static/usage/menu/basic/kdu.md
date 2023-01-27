```html
<template>
  <nav-menu content-id="main-content">
    <nav-header>
      <nav-toolbar>
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
```
