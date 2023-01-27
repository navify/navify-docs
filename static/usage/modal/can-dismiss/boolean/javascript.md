```html
<div class="nav-page">
  <nav-header>
    <nav-toolbar>
      <nav-title>App</nav-title>
    </nav-toolbar>
  </nav-header>
  <nav-content class="nav-padding">
    <nav-button id="open-modal" expand="block">Open</nav-button>

    <nav-modal trigger="open-modal">
      <nav-header>
        <nav-toolbar>
          <nav-title>Modal</nav-title>
          <nav-buttons slot="end">
            <nav-button onclick="dismiss()">Close</nav-button>
          </nav-buttons>
        </nav-toolbar>
      </nav-header>
      <nav-content>
        <p class="nav-padding-horizontal">You must accept the terms and conditions to close this modal.</p>
        <nav-item>
          <nav-label class="nav-text-wrap" for="terms">Do you accept the terms and conditions?</nav-label>
          <nav-checkbox id="terms"></nav-checkbox>
        </nav-item>
      </nav-content>
    </nav-modal>
  </nav-content>
</div>

<script>
  var modal = document.querySelector('nav-modal');

  modal.canDismiss = false;
  modal.presentingElement = document.querySelector('.nav-page');

  function dismiss() {
    modal.dismiss();
  }

  modal.addEventListener('didPresent', () => {
    var terms = document.getElementById('terms');
    terms.addEventListener('navChange', (ev) => {
      modal.canDismiss = ev.detail.checked;
    });
  });
</script>
```
