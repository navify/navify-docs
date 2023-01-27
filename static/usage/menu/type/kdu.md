```html
<template>
  <nav-menu :type="menuType" content-id="main-content">
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
  
  <div class="nav-page" id="main-content">
    <nav-header>
      <nav-toolbar>
        <nav-title>Menu</nav-title>
      </nav-toolbar>
    </nav-header>
    <nav-content class="nav-padding">
      <h2>Select an overlay type:</h2>
      <nav-radio-group value="overlay" k-model="menuType">
        <nav-item>
          <nav-label>
            <code>overlay</code>
          </nav-label>
          <nav-radio value="overlay"></nav-radio>
        </nav-item>
        <nav-item>
          <nav-label>
            <code>reveal</code>
          </nav-label>
          <nav-radio value="reveal"></nav-radio>
        </nav-item>
        <nav-item>
          <nav-label>
            <code>push</code>
          </nav-label>
          <nav-radio value="push"></nav-radio>
        </nav-item>
      </nav-radio-group> <br />
      <nav-menu-toggle>
        <nav-button>Click to open the menu</nav-button>
      </nav-menu-toggle>
    </nav-content>
  </div>
</template>

<script lang="ts">
  import {
    NavButton,
    NavContent,
    NavHeader,
    NavItem,
    NavLabel,
    NavMenu,
    NavMenuToggle,
    NavPage,
    NavRadio,
    NavRadioGroup,
    NavTitle,
    NavToolbar
  } from '@navify/kdu';
  import { defineComponent, ref } from 'kdu';

  export default defineComponent({
    components: {
      NavButton,
      NavContent,
      NavHeader,
      NavItem,
      NavLabel,
      NavMenu,
      NavMenuToggle,
      NavPage,
      NavRadio,
      NavRadioGroup,
      NavTitle,
      NavToolbar
    },
    setup() {
      const menuType = ref('overlay');
      
      return { menuType };
    }
  });
</script>
```
