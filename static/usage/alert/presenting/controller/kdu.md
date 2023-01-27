```html
<template>
  <nav-button @click="presentAlert">Click Me</nav-button>
</template>

<script lang="ts">
  import { NavButton, alertController } from '@navify/kdu';

  export default {
    components: { NavButton },
    setup() {
      const presentAlert = async () => {
        const alert = await alertController.create({
          header: 'Alert',
          subHeader: 'Important message',
          message: 'This is an alert!',
          buttons: ['OK'],
        });

        await alert.present();
      };

      return { presentAlert };
    },
  };
</script>
```
