```html
<template>
  <nav-button @click="presentToast">Click Me</nav-button>
</template>

<script lang="ts">
  import { NavButton, toastController } from '@navify/kdu';

  export default {
    components: { NavButton },
    methods: {
      async presentToast() {
        const toast = await toastController.create({
          message: 'Hello Styled World!',
          duration: 3000,
          cssClass: 'custom-toast',
          buttons: [
            {
              text: 'Dismiss',
              role: 'cancel'
            }
          ],
        });

        await toast.present();
      },
    },
  };
</script>

<style>
  nav-toast.custom-toast {
    --background: #F4F4FA;
    --box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.2);
    --color: #4b4a50;
  }
    
  nav-toast.custom-toast::part(message) {
    font-style: italic;
  }

  nav-toast.custom-toast::part(button) {
    border-left: 1px solid #d2d2d2;
    color: #030207;
    font-size: 15px;
  }
</style>
```
