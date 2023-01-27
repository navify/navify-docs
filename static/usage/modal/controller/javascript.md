```html
<nav-header>
  <nav-toolbar>
    <nav-title>Controller Modal</nav-title>
  </nav-toolbar>
</nav-header>
<nav-content class="nav-padding">
  <nav-button expand="block" onclick="openModal()">Open</nav-button>
  <p id="message">This modal example uses the modalController to present and dismiss modals.</p>
</nav-content>

<script>
  var openModal = async () => {
    const div = document.createElement('div');
    div.innerHTML = `
      <nav-header>
        <nav-toolbar>
          <nav-buttons slot="start">
            <nav-button color="medium" onclick="cancel()">Cancel</nav-button>
          </nav-buttons>
          <nav-title>Welcome</nav-title>
          <nav-buttons slot="end">
            <nav-button onclick="confirm()">Confirm</nav-button>
          </nav-buttons>
        </nav-toolbar>
      </nav-header>
      <nav-content class="nav-padding">
        <nav-item>
          <nav-label position="stacked">Enter your name</nav-label>
          <nav-input type="text" placeholder="Your name"></nav-input>
        </nav-item>
      </nav-content>
      `;

    const modal = await modalController.create({
      component: div,
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      document.querySelector('#message').innerHTML = `Hello, ${data}!`;
    }
  };

  function cancel() {
    modalController.dismiss(null, 'cancel');
  }

  function confirm() {
    const input = document.querySelector('nav-input');
    modalController.dismiss(input.value, 'confirm');
  }
</script>
```
