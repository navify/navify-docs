```html
<template>
  <nav-button @click="presentToast">Click Me</nav-button>
  <p>{{ handlerMessage }}</p>
  <p>{{ roleMessage }}</p>
</template>

<script lang="ts">
  import { NavButton, toastController } from '@navify/kdu';

  export default {
    components: { NavButton },
    data() {
      return {
        handlerMessage: '',
        roleMessage: '',
      };
    },
    methods: {
      async presentToast() {
        const toast = await toastController.create({
          message: 'Hello World!',
          duration: 3000,
          buttons: [
            {
              text: 'More Info',
              role: 'info',
              handler: () => { this.handlerMessage = 'More Info clicked'; }
            },
            {
              text: 'Dismiss',
              role: 'cancel',
              handler: () => { this.handlerMessage = 'Dismiss clicked'; }
            }
          ]
        });

        await toast.present();

        const { role } = await toast.onDidDismiss();
        this.roleMessage = `Dismissed with role: ${role}`;
      },
    },
  };
</script>
```
