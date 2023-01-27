```html
<template>
  <nav-button @click="openPopover">Click Me</nav-button>
  <p>{{ roleMsg }}</p>
</template>

<script lang="ts">
  import { NavButton, popoverController } from '@navify/kdu';
  import Popover from './Popover.kdu';

  export default {
    components: { NavButton },
    data() {
      return {
        roleMsg: '',
      };
    },
    methods: {
      async openPopover(ev: Event) {
        const popover = await popoverController.create({
          component: Popover,
          event: ev,
        });
        await popover.present();

        const { role } = await popover.onDidDismiss();
        this.roleMsg = `Popover dismissed with role: ${role}`;
      },
    },
  };
</script>
```
