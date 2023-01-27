```html
<template>
  <nav-header>
    <nav-toolbar>
      <nav-buttons slot="start">
        <nav-button color="medium" @click="cancel">Cancel</nav-button>
      </nav-buttons>
      <nav-title>Modal</nav-title>
      <nav-buttons slot="end">
        <nav-button @click="confirm">Confirm</nav-button>
      </nav-buttons>
    </nav-toolbar>
  </nav-header>
  <nav-content class="nav-padding">
    <nav-item>
      <nav-label position="stacked">Your name</nav-label>
      <nav-input k-model="name" placeholder="Your name"></nav-input>
    </nav-item>
  </nav-content>
</template>

<script lang="ts">
  import {
    NavContent,
    NavHeader,
    NavTitle,
    NavToolbar,
    NavButtons,
    NavButton,
    NavItem,
    NavLabel,
    NavInput,
    modalController,
  } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    name: 'Modal',
    components: { NavContent, NavHeader, NavTitle, NavToolbar, NavButtons, NavButton, NavItem, NavLabel, NavInput },
    methods: {
      cancel() {
        return modalController.dismiss(null, 'cancel');
      },
      confirm() {
        return modalController.dismiss(this.name, 'confirm');
      },
    },
  });
</script>
```
