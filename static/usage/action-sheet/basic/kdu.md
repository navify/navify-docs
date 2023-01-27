```html
<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
  }

  code {
    white-space: pre-wrap;
  }
</style>

<template>
  <div class="container">
    <nav-button @click="presentActionSheet">Open</nav-button>
    <code>{{ result }}</code>
  </div>
</template>

<script lang="ts">
  import { ref } from 'kdu';
  import { NavButton, actionSheetController } from '@navify/kdu';

  export default {
    components: { NavButton },
    setup() {
      const result = ref('');

      const presentActionSheet = async () => {
        const actionSheet = await actionSheetController.create({
          header: 'Example header',
          subHeader: 'Example subheader',
          buttons: [
            {
              text: 'Delete',
              role: 'destructive',
              data: {
                action: 'delete',
              },
            },
            {
              text: 'Share',
              data: {
                action: 'share',
              },
            },
            {
              text: 'Cancel',
              role: 'cancel',
              data: {
                action: 'cancel',
              },
            },
          ],
        });

        await actionSheet.present();

        const res = await actionSheet.onDidDismiss();
        result.value = JSON.stringify(res, null, 2);
      };

      return {
        result,
        presentActionSheet,
      };
    },
  };
</script>
```
