```html
<style>
  nav-modal {
    --height: 50%;
    --border-radius: 16px;
    --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  nav-modal::part(backdrop) {
    background: rgba(209, 213, 219);
    opacity: 1;
  }

  nav-modal nav-toolbar {
    --background: rgb(14 116 144);
    --color: white;
  }
</style>

<nav-app>
  <nav-header>
    <nav-toolbar>
      <nav-title>App</nav-title>
    </nav-toolbar>
  </nav-header>
  <nav-content class="nav-padding">
    <nav-button id="open-modal" expand="block">Open Modal</nav-button>

    <nav-modal trigger="open-modal">
      <nav-content>
        <nav-toolbar>
          <nav-title>Modal</nav-title>
          <nav-buttons slot="end">
            <nav-button color="light" onclick="modal.dismiss()">Close</nav-button>
          </nav-buttons>
        </nav-toolbar>
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
</nav-app>

<script>
  var modal = document.querySelector('nav-modal');

  function dismiss() {
    modal.dismiss();
  }
</script>
```
