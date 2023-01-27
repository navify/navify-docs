```html
<style>
  nav-modal#example-modal {
    --width: fit-content;
    --min-width: 250px;
    --height: fit-content;
    --border-radius: 6px;
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  }
  
  nav-modal#example-modal h1 {
    margin: 20px 20px 10px 20px;
  }
  
  nav-modal#example-modal nav-icon {
    margin-right: 6px;
  
    width: 48px;
    height: 48px;
  
    padding: 4px 0;
  
    color: #aaaaaa;
  }
  
  nav-modal#example-modal .wrapper {
    margin-bottom: 10px;
  }
</style>

<template>
  <nav-header>
    <nav-toolbar>
      <nav-title>App</nav-title>
    </nav-toolbar>
  </nav-header>
  <nav-content class="nav-padding">
    <nav-button id="open-custom-dialog" expand="block">Open Custom Dialog</nav-button>
    
    <nav-modal id="example-modal" ref="modal" trigger="open-custom-dialog">
      <div class="wrapper">
        <h1>Dialog header</h1>
    
        <nav-list lines="none">
          <nav-item :button="true" :detail="false" @click="dismiss()">
            <nav-icon :icon="personCircle"></nav-icon>
            <nav-label>Item 1</nav-label>
          </nav-item>
          <nav-item :button="true" :detail="false" @click="dismiss()">
            <nav-icon :icon="personCircle"></nav-icon>
            <nav-label>Item 2</nav-label>
          </nav-item>
          <nav-item :button="true" :detail="false" @click="dismiss()">
            <nav-icon :icon="personCircle"></nav-icon>
            <nav-label>Item 3</nav-label>
          </nav-item>
        </nav-list>
      </div>
    </nav-modal>
  </nav-content>
</template>

<script lang="ts">
  import {
    NavButton,
    NavModal,
    NavHeader,
    NavContent,
    NavToolbar,
    NavTitle,
    NavItem,
    NavList,
    NavLabel,
    NavIcon,
  } from '@navify/kdu';
  import { personCircle } from 'navicons/icons';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: {
      NavButton,
      NavModal,
      NavHeader,
      NavContent,
      NavToolbar,
      NavTitle,
      NavItem,
      NavList,
      NavLabel,
      NavIcon,
    },
    methods: {
      dismiss() {
        this.$refs.modal.$el.dismiss();
      },
    },
    setup() {
      return { personCircle };
    }
  });
</script>
```
