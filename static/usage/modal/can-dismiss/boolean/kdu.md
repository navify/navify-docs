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
        <nav-content>
          <p class="nav-padding-horizontal">You must accept the terms and conditions to close this modal.</p>
          <nav-item>
            <nav-label class="nav-text-wrap" for="terms">Do you accept the terms and conditions?</nav-label>
            <nav-checkbox id="terms" @navChange="onTermsChanged" :checked="canDismiss"></nav-checkbox>
          </nav-item>
        </nav-content>
      </nav-modal>
    </nav-content>
  </nav-page>
</template>

<script lang="ts">
  import {
    CheckboxCustomEvent,
    NavButtons,
    NavButton,
    NavModal,
    NavHeader,
    NavContent,
    NavToolbar,
    NavTitle,
    NavItem,
    NavCheckbox,
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
      NavCheckbox,
      NavLabel,
      NavPage,
    },
    data() {
      return {
        canDismiss: false,
        presentingElement: undefined,
      };
    },
    methods: {
      dismiss() {
        this.$refs.modal.$el.dismiss();
      },
      onTermsChanged(ev: CheckboxCustomEvent) {
        this.canDismiss = ev.detail.checked;
      },
    },
    mounted() {
      this.presentingElement = this.$refs.page.$el;
    },
  });
</script>
```
