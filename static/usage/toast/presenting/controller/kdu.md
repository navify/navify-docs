```html
<template>
  <nav-button expand="block" @click="presentToast('top')">Present Toast At the Top</nav-button>
  <nav-button expand="block" @click="presentToast('middle')">Present Toast At the Middle</nav-button>
  <nav-button expand="block" @click="presentToast('bottom')">Present Toast At the Bottom</nav-button>
</template>

<script lang="ts">
  import { NavButton, toastController } from '@navify/kdu';

  export default {
    components: { NavButton },
    methods: {
      async presentToast(position: 'top' | 'middle' | 'bottom') {
        const toast = await toastController.create({
          message: 'Hello World!',
          duration: 1500,
          position: position
        });

        await toast.present();
      },
    },
  };
</script>
```
