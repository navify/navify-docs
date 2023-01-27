```html
<template>
  <nav-split-pane when="xs" content-id="main">
    <nav-menu content-id="main">
      <nav-header>
        <nav-toolbar color="tertiary">
          <nav-title>Menu</nav-title>
        </nav-toolbar>
      </nav-header>
      <nav-content class="nav-padding">
        Menu Content is 350px wide and has a blue dashed border
      </nav-content>
    </nav-menu>
  
    <div class="nav-page" id="main">
      <nav-header>
        <nav-toolbar>
          <nav-title>Main View</nav-title>
        </nav-toolbar>
      </nav-header>
      <nav-content class="nav-padding">
        Main View Content
      </nav-content>
    </div>
  </nav-split-pane>
</template>

<script lang="ts">
  import { NavContent, NavHeader, NavMenu, NavSplitPane, NavTitle, NavToolbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavContent, NavHeader, NavMenu, NavSplitPane, NavTitle, NavToolbar  },
  });
</script>

<style scoped>
  nav-split-pane {
    --side-width: 350px;
    --side-max-width: 350px;
  
    --border: 1px dashed #b3baff;
  }
</style>
```
