```html
<template>
  <nav-header>
    <nav-toolbar>
      <nav-title>Inline Modal</nav-title>
    </nav-toolbar>
  </nav-header>
  <nav-content class="nav-padding">
    <nav-button id="open-modal" expand="block">Open</nav-button>
    <p>{{ message }}</p>
    <nav-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
      <nav-header>
        <nav-toolbar>
          <nav-buttons slot="start">
            <nav-button @click="cancel()">Cancel</nav-button>
          </nav-buttons>
          <nav-title>Welcome</nav-title>
          <nav-buttons slot="end">
            <nav-button :strong="true" @click="confirm()">Confirm</nav-button>
          </nav-buttons>
        </nav-toolbar>
      </nav-header>
      <nav-content class="nav-padding">
        <nav-item>
          <nav-label position="stacked">Enter your name</nav-label>
          <nav-input ref="input" type="text" placeholder="Your name"></nav-input>
        </nav-item>
      </nav-content>
    </nav-modal>
  </nav-content>
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
    NavInput,
    NavLabel,
  } from '@navify/kdu';
  import { OverlayEventDetail } from '@navify/core/components';
  import { defineComponent, ref } from 'kdu';

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
      NavInput,
      NavLabel,
    },
    data() {
      return {
        message: 'This modal example uses triggers to automatically open a modal when the button is clicked.',
      };
    },
    methods: {
      cancel() {
        this.$refs.modal.$el.dismiss(null, 'cancel');
      },
      confirm() {
        const name = this.$refs.input.$el.value;
        this.$refs.modal.$el.dismiss(name, 'confirm');
      },
      onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if (ev.detail.role === 'confirm') {
          this.message = `Hello, ${ev.detail.data}!`;
        }
      },
    },
  });
</script>
```
