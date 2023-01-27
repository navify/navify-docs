```html
<style>
  nav-action-sheet.my-custom-class .action-sheet-group {
    background: #f58840;
  }

  nav-action-sheet.my-custom-class .action-sheet-title {
    color: #fff;
  }

  nav-action-sheet.my-custom-class .action-sheet-cancel::after {
    background: #e97223;
  }

  nav-action-sheet.my-custom-class .action-sheet-button,
  nav-action-sheet.my-custom-class .action-sheet-button.nav-focused {
    color: #000000;
  }

  @media (any-hover: hover) {
    nav-action-sheet.my-custom-class .action-sheet-button:hover {
      color: #000000;
    }
  }

  nav-action-sheet.my-custom-class nav-backdrop {
    opacity: 0.6;
  }
</style>

<template>
  <nav-button @click="presentActionSheet">Open</nav-button>
</template>

<script lang="ts">
  import { NavButton, actionSheetController } from '@navify/kdu';

  export default {
    components: { NavButton },
    setup() {
      const presentActionSheet = async () => {
        const actionSheet = await actionSheetController.create({
          header: 'Example header',
          subHeader: 'Example subheader',
          cssClass: 'my-custom-class',
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
        actionSheet.present();
      };

      return { presentActionSheet };
    },
  };
</script>
```
