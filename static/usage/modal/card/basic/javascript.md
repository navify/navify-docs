```html
<div class="nav-page">
  <nav-header>
    <nav-toolbar>
      <nav-title>App</nav-title>
    </nav-toolbar>
  </nav-header>
  <nav-content class="nav-padding">
    <nav-button id="open-modal" expand="block">Open Card Modal</nav-button>

    <nav-modal trigger="open-modal">
      <nav-header>
        <nav-toolbar>
          <nav-title>Modal</nav-title>
          <nav-buttons slot="end">
            <nav-button onclick="modal.dismiss()">Close</nav-button>
          </nav-buttons>
        </nav-toolbar>
      </nav-header>
      <nav-content>
        <nav-list>
          <nav-item>
            <nav-avatar slot="start">
              <nav-img src="https://i.pravatar.cc/300?u=b" />
            </nav-avatar>
            <nav-label>
              <h2>Connor Smith</h2>
              <p>Sales Rep</p>
            </nav-label>
          </nav-item>
          <nav-item>
            <nav-avatar slot="start">
              <nav-img src="https://i.pravatar.cc/300?u=a" />
            </nav-avatar>
            <nav-label>
              <h2>Daniel Smith</h2>
              <p>Product Designer</p>
            </nav-label>
          </nav-item>
          <nav-item>
            <nav-avatar slot="start">
              <nav-img src="https://i.pravatar.cc/300?u=d" />
            </nav-avatar>
            <nav-label>
              <h2>Greg Smith</h2>
              <p>Director of Operations</p>
            </nav-label>
          </nav-item>
          <nav-item>
            <nav-avatar slot="start">
              <nav-img src="https://i.pravatar.cc/300?u=e" />
            </nav-avatar>
            <nav-label>
              <h2>Zoey Smith</h2>
              <p>CEO</p>
            </nav-label>
          </nav-item>
        </nav-list>
      </nav-content>
    </nav-modal>
  </nav-content>
</div>

<script>
  var modal = document.querySelector('nav-modal');

  modal.presentingElement = document.querySelector('.nav-page');

  function dismiss() {
    modal.dismiss();
  }
</script>
```
