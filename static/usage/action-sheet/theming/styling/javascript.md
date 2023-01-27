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
