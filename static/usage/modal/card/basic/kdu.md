```html
<template>
  <nav-page ref="page">
    <nav-header>
      <nav-toolbar>
        <nav-title>App</nav-title>
      </nav-toolbar>
    </nav-header>
    <nav-content class="nav-padding">
      <nav-button id="open-modal" expand="block">Open</nav-button>

      <nav-modal ref="modal" trigger="open-modal" :presenting-element="presentingElement">
        <nav-header>
          <nav-toolbar>
            <nav-title>Modal</nav-title>
            <nav-buttons slot="end">
              <nav-button @click="dismiss()">Close</nav-button>
            </nav-buttons>
          </nav-toolbar>
        </nav-header>
        <nav-content class="nav-padding">
          <nav-list>
            <nav-item>
              <nav-avatar slot="start">
                <nav-img src="https://i.pravatar.cc/300?u=b"></nav-img>
              </nav-avatar>
              <nav-label>
                <h2>Connor Smith</h2>
                <p>Sales Rep</p>
              </nav-label>
            </nav-item>
            <nav-item>
              <nav-avatar slot="start">
                <nav-img src="https://i.pravatar.cc/300?u=a"></nav-img>
              </nav-avatar>
              <nav-label>
                <h2>Daniel Smith</h2>
                <p>Product Designer</p>
              </nav-label>
            </nav-item>
            <nav-item>
              <nav-avatar slot="start">
                <nav-img src="https://i.pravatar.cc/300?u=d"></nav-img>
              </nav-avatar>
              <nav-label>
                <h2>Greg Smith</h2>
                <p>Director of Operations</p>
              </nav-label>
            </nav-item>
            <nav-item>
              <nav-avatar slot="start">
                <nav-img src="https://i.pravatar.cc/300?u=e"></nav-img>
              </nav-avatar>
              <nav-label>
                <h2>Zoey Smith</h2>
                <p>CEO</p>
              </nav-label>
            </nav-item>
          </nav-list>
        </nav-content>
      </nav-modal>
    </nav-content>
  </nav-page>
</template>

<script lang="ts">
  import {
    NavButtons,
    NavButton,
    NavModal,
    NavHeader,
    NavContent,
    NavToolbar,
    NavTitle,
    NavItem,
    NavList,
    NavAvatar,
    NavImg,
    NavLabel,
    NavPage,
  } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: {
      NavButtons,
      NavButton,
      NavModal,
      NavHeader,
      NavContent,
      NavToolbar,
      NavTitle,
      NavItem,
      NavList,
      NavAvatar,
      NavImg,
      NavLabel,
      NavPage,
    },
    data() {
      return {
        presentingElement: null,
      };
    },
    methods: {
      dismiss() {
        this.$refs.modal.$el.dismiss();
      },
    },
    mounted() {
      this.presentingElement = this.$refs.page.$el;
    },
  });
</script>
```
