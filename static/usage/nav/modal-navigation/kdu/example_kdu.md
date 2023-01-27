```html
<template>
  <nav-page>
    <nav-header>
      <nav-toolbar>
        <nav-title>Modal Navigation</nav-title>
      </nav-toolbar>
    </nav-header>
    <nav-content class="nav-padding">
      <nav-button id="openModal">Open Modal</nav-button>
      <nav-modal ref="modal" trigger="openModal" @will-present="onWillPresent">
        <nav-header>
          <nav-toolbar>
            <nav-title>Modal</nav-title>
            <nav-buttons slot="end">
              <nav-button @click="dismiss"> Close </nav-button>
            </nav-buttons>
          </nav-toolbar>
        </nav-header>
        <nav-content>
          <nav-nav ref="nav"></nav-nav>
        </nav-content>
      </nav-modal>
    </nav-content>
  </nav-page>
</template>

<script lang="ts">
  import { nextTick } from 'kdu';
  import {
    NavNav,
    NavPage,
    NavHeader,
    NavToolbar,
    NavTitle,
    NavContent,
    NavButton,
    NavModal,
    NavButtons,
  } from '@navify/kdu';
  import PageOne from './PageOne.kdu';

  export default {
    components: { NavNav, NavPage, NavHeader, NavToolbar, NavTitle, NavContent, NavButton, NavModal, NavButtons },
    methods: {
      dismiss() {
        this.$refs.modal.$el.dismiss();
      },
      async onWillPresent() {
        // Need to wait two ticks before the ref is set
        await nextTick();
        await nextTick();

        const nav = this.$refs.nav.$el;
        nav.setRoot(PageOne, { nav });
      },
    },
  };
</script>
```
