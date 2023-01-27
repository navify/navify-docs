```html
<div class="nav-page">
  <nav-header>
    <nav-toolbar>
      <nav-title>App</nav-title>
    </nav-toolbar>
  </nav-header>
  <nav-content class="nav-padding">
    <nav-button id="open-modal" expand="block">Open</nav-button>

    <nav-modal trigger="open-modal" swipe-to-close="true">
      <nav-header>
        <nav-toolbar>
          <nav-title>Modal</nav-title>
          <nav-buttons slot="end">
            <nav-button onclick="dismiss()">Close</nav-button>
          </nav-buttons>
        </nav-toolbar>
      </nav-header>
      <nav-content class="nav-padding">
        <p>You will be prompted when closing this modal.</p>
      </nav-content>
    </nav-modal>
  </nav-content>
</div>

<script>
  var modal = document.querySelector('nav-modal');

  modal.canDismiss = promptClose;
  modal.presentingElement = document.querySelector('.nav-page');

  function dismiss() {
    modal.dismiss();
  }

  async function promptClose() {
    const actionSheet = document.createElement('nav-action-sheet');

    actionSheet.header = 'Are you sure?';
    actionSheet.buttons = [
      {
        text: 'Yes',
        role: 'confirm',
      },
      {
        text: 'No',
        role: 'cancel',
      },
    ];
    document.body.appendChild(actionSheet);
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();

    return role === 'confirm';
  }
</script>
```
