```html
<template>
  <nav-header>
    <nav-toolbar>
      <nav-title>Example</nav-title>
    </nav-toolbar>
  </nav-header>
  <nav-content class="nav-padding">
    <nav-button id="open-modal" expand="block">Open Modal</nav-button>
    <nav-modal ref="modal" :keep-contents-mounted="true" trigger="open-modal">
      <nav-header>
        <nav-toolbar>
          <nav-buttons slot="start">
            <nav-button @click="close()">Cancel</nav-button>
          </nav-buttons>
          <nav-title>Modal</nav-title>
        </nav-toolbar>
      </nav-header>
      <nav-content class="nav-padding">
        This content was mounted as soon as the modal was created.
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
  } from '@navify/kdu';
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
    },
    methods: {
      close() {
        this.$refs.modal.$el.dismiss();
      },
    },
  });
</script>
```
