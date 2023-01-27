```html
<style>
  nav-action-sheet.my-custom-class {
    --background: #f58840;
    --backdrop-opacity: 0.6;
    --button-background-selected: #e97223;
    --button-color: #000000;
    --color: #fff;
    /* role: "destructive" button iOS styling override */
    --nav-color-danger: #000000;
  }
</style>

<nav-button onclick="presentActionSheet()">Open</nav-button>

<script>
  async function presentActionSheet() {
    const actionSheet = document.createElement('nav-action-sheet');
    actionSheet.cssClass = 'my-custom-class';
    actionSheet.header = 'Example header';
    actionSheet.subHeader = 'Example subheader';
    actionSheet.buttons = [
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
    ];

    document.body.appendChild(actionSheet);
    await actionSheet.present();
  }
</script>
```
