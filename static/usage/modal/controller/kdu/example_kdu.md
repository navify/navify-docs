```html
<template>
  <nav-page>
    <nav-header>
      <nav-toolbar>
        <nav-title>Controller Modal</nav-title>
      </nav-toolbar>
    </nav-header>
    <nav-content class="nav-padding">
      <nav-button expand="block" @click="openModal">Open Modal</nav-button>
      <p>{{ message }}</p>
    </nav-content>
  </nav-page>
</template>

<script lang="ts">
  import { NavButton, NavContent, NavPage, NavHeader, NavToolbar, NavTitle, modalController } from '@navify/kdu';
  import Modal from './Modal.kdu';

  export default {
    components: { NavButton, NavContent, NavPage, NavHeader, NavToolbar, NavTitle },
    data() {
      return {
        message: 'This modal example uses the modalController to present and dismiss modals.',
      };
    },
    methods: {
      async openModal() {
        const modal = await modalController.create({
          component: Modal,
        });
        modal.present();

        const { data, role } = await modal.onWillDismiss();

        if (role === 'confirm') {
          this.message = `Hello, ${data}!`;
        }
      },
    },
  };
</script>
```
