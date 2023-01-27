```html
<template>
  <nav-menu content-id="main-content">
    <nav-header>
      <nav-toolbar>
        <nav-title>Menu Content</nav-title>
      </nav-toolbar>
    </nav-header>
    <nav-content class="nav-padding">
      <nav-menu-toggle>
        <nav-button>Click to close the menu</nav-button>
      </nav-menu-toggle>
    </nav-content>
  </nav-menu>
  <nav-page id="main-content">
    <nav-header>
      <nav-toolbar>
        <nav-title>Menu</nav-title>
      </nav-toolbar>
    </nav-header>
    <nav-content class="nav-padding">
      <nav-menu-toggle>
        <nav-button>Click to open the menu</nav-button>
      </nav-menu-toggle>
    </nav-content>
  </nav-page>
</template>

<script lang="ts">
  import {
    NavButton,
    NavContent,
    NavHeader,
    NavMenu,
    NavMenuToggle,
    NavPage,
    NavTitle,
    NavToolbar
  } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: {
      NavButton,
      NavContent,
      NavHeader,
      NavMenu,
      NavMenuToggle,
      NavPage,
      NavTitle,
      NavToolbar
    },
  });
</script>
```
