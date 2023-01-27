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
          header: 'Select your favorite color',
          buttons: ['OK'],
          inputs: [
            {
              label: 'Red',
              type: 'radio',
              value: 'red',
            },
            {
              label: 'Blue',
              type: 'radio',
              value: 'blue',
            },
            {
              label: 'Green',
              type: 'radio',
              value: 'green',
            },
          ],
        });

        await alert.present();
      };

      return { presentAlert };
    },
  };
</script>
```
