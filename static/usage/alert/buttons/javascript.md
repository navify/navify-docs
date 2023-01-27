```html
<nav-button onclick="presentAlert()">Click Me</nav-button>
<p id="handlerResult"></p>
<p id="roleResult"></p>

<script>
  const handlerOutput = document.querySelector('#handlerResult');
  const roleOutput = document.querySelector('#roleResult');

  async function presentAlert() {
    const alert = document.createElement('nav-alert');
    alert.header = 'Alert!';
    alert.buttons = [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => { handlerOutput.innerText = 'Alert canceled'; }
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => { handlerOutput.innerText = 'Alert confirmed'; }
      }
    ];

    document.body.appendChild(alert);
    await alert.present();

    const { role } = await alert.onDidDismiss();
    roleOutput.innerText = `Dismissed with role: ${role}`;
  }
</script>
```
