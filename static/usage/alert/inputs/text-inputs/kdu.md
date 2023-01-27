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
          header: 'Please enter your info',
          buttons: ['OK'],
          inputs: [
            {
              placeholder: 'Name',
            },
            {
              placeholder: 'Nickname (max 8 characters)',
              attributes: {
                maxlength: 8,
              },
            },
            {
              type: 'number',
              placeholder: 'Age',
              min: 1,
              max: 100,
            },
            {
              type: 'textarea',
              placeholder: 'A little about yourself',
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
