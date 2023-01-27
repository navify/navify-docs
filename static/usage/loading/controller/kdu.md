```html
<template>
  <nav-button @click="showLoading">Show Loading</nav-button>
</template>

<script lang="ts">
  import { NavButton, loadingController } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton },
    setup() {
      const showLoading = async () => {
        const loading = await loadingController.create({
          message: 'Dismissing after 3 seconds...',
          duration: 3000
        });
        
        loading.present();
      }
      
      return { showLoading }
    }
  });
</script>
```
