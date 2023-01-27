```html
<template>
  <nav-button @click="showLoading()">Show Loading</nav-button>
</template>

<script lang="ts">
  import { NavButton, loadingController } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton },
    setup() {
      const showLoading = async () => {
        const loading = await loadingController.create({
          message: 'Loading...',
          duration: 3000,
          cssClass: 'custom-loading'
        });
        
        loading.present();
      }
      
      return { showLoading }
    }
  });
</script>
<style>
  nav-loading.custom-loading {
    --background: #e3edff;
    --spinner-color: #1c6dff;

    color: #1c6dff;
  }
</style>
```
