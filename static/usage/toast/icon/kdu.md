```html
<template>
  <nav-button @click="presentToast">Click Me</nav-button>
</template>

<script lang="ts">
  import { NavButton, toastController } from '@navify/kdu';
  import { globe } from 'navicons/icons';

  export default {
    components: { NavButton },
    methods: {
      async presentToast() {
        const toast = await toastController.create({
          message: 'Hello World!',
          duration: 1500,
          icon: globe
        });

        await toast.present();

        const { role } = await toast.onDidDismiss();
        this.roleMessage = `Dismissed with role: ${role}`;
      },
    },
  };
</script>
```
