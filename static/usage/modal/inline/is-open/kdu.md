```html
<template>
  <nav-header>
    <nav-toolbar>
      <nav-title>Inline Modal</nav-title>
    </nav-toolbar>
  </nav-header>
  <nav-content class="nav-padding">
    <nav-button expand="block" @click="setOpen(true)">Open</nav-button>

    <nav-modal :is-open="isOpen">
      <nav-header>
        <nav-toolbar>
          <nav-title>Modal</nav-title>
          <nav-buttons slot="end">
            <nav-button @click="setOpen(false)">Close</nav-button>
          </nav-buttons>
        </nav-toolbar>
      </nav-header>
      <nav-content class="nav-padding">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
          reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque,
          dicta.
        </p>
      </nav-content>
    </nav-modal>
  </nav-content>
</template>

<script lang="ts">
  import { NavButtons, NavButton, NavModal, NavHeader, NavToolbar, NavContent, NavTitle } from '@navify/kdu';
  import { defineComponent, ref } from 'kdu';

  export default defineComponent({
    components: { NavButtons, NavButton, NavModal, NavHeader, NavContent, NavToolbar, NavTitle },
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      setOpen(isOpen: boolean) {
        this.isOpen = isOpen;
      },
    },
  });
</script>
```
