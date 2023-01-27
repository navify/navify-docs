```html
<nav-header>
  <nav-toolbar>
    <nav-title>Inline Modal</nav-title>
  </nav-toolbar>
</nav-header>
<nav-content class="nav-padding">
  <nav-button id="open-modal" expand="block">Open</nav-button>
  <p id="message">This modal example uses triggers to automatically open a modal when the button is clicked.</p>
  <nav-modal trigger="open-modal">
    <nav-header>
      <nav-toolbar>
        <nav-buttons slot="start">
          <nav-button onclick="cancel()">Cancel</nav-button>
        </nav-buttons>
        <nav-title>Welcome</nav-title>
        <nav-buttons slot="end">
          <nav-button onclick="confirm()" strong="true">Confirm</nav-button>
        </nav-buttons>
      </nav-toolbar>
    </nav-header>
    <nav-content class="nav-padding">
      <nav-item>
        <nav-label position="stacked">Enter your name</nav-label>
        <nav-input type="text" placeholder="Your name"></nav-input>
      </nav-item>
    </nav-content>
  </nav-modal>
</nav-content>

<script>
  var modal = document.querySelector('nav-modal');

  function cancel() {
    modal.dismiss(null, 'cancel');
  }

  function confirm() {
    const input = document.querySelector('nav-input');
    modal.dismiss(input.value, 'confirm');
  }

  modal.addEventListener('willDismiss', (ev) => {
    if (ev.detail.role === 'confirm') {
      const message = document.querySelector('#message');
      message.textContent = `Hello ${ev.detail.data}!`;
    }
  });
</script>
```
