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

      <nav-modal ref="modal" trigger="open-modal" :can-dismiss="canDismiss" :presenting-element="presentingElement">
        <nav-header>
          <nav-toolbar>
            <nav-title>Modal</nav-title>
            <nav-buttons slot="end">
              <nav-button @click="dismiss()">Close</nav-button>
            </nav-buttons>
          </nav-toolbar>
        </nav-header>
        <nav-content class="nav-padding">
          <p>You will be prompted when closing this modal.</p>
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
    NavPage,
    actionSheetController,
  } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButtons, NavButton, NavModal, NavHeader, NavContent, NavToolbar, NavTitle, NavPage },
    data() {
      return {
        presentingElement: undefined,
      };
    },
    methods: {
      dismiss() {
        this.$refs.modal.$el.dismiss();
      },
      async canDismiss() {
        const actionSheet = await actionSheetController.create({
          header: 'Are you sure?',
          buttons: [
            {
              text: 'Yes',
              role: 'confirm',
            },
            {
              text: 'No',
              role: 'cancel',
            },
          ],
        });
        actionSheet.present();
        const { role } = await actionSheet.onWillDismiss();
        return role === 'confirm';
      },
    },
    mounted() {
      this.presentingElement = this.$refs.page.$el;
    },
  });
</script>
```
