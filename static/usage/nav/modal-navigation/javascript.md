```html
<nav-app>
  <nav-header>
    <nav-toolbar>
      <nav-title>Modal Navigation</nav-title>
    </nav-toolbar>
  </nav-header>
  <nav-content class="nav-padding">
    <nav-button id="openModal">Open Modal</nav-button>
    <nav-modal trigger="openModal">
      <nav-header>
        <nav-toolbar>
          <nav-title>Modal</nav-title>
          <nav-buttons slot="end">
            <nav-button onclick="dismiss()"> Close </nav-button>
          </nav-buttons>
        </nav-toolbar>
      </nav-header>
      <nav-content>
        <nav-nav></nav-nav>
      </nav-content>
    </nav-modal>
  </nav-content>
</nav-app>

<script>
  const modal = document.querySelector('nav-modal');
  const nav = document.querySelector('nav-nav');

  modal.addEventListener('willPresent', () => {
    nav.setRoot('page-one');
  });

  var dismiss = () => modal.dismiss();

  var navigate = (component) => {
    nav.push(component);
  };

  var navigateBack = () => {
    nav.pop();
  };

  var navigateToRoot = () => {
    nav.popToRoot();
  };

  class PageOne extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav-content class="nav-padding">
          <h1>Page One</h1>
          <nav-button onclick="navigate('page-two')">Go to Page Two</nav-button>
        </nav-content>
      `;
    }
  }

  class PageTwo extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav-content class="nav-padding">
          <h1>Page Two</h1>
          <nav-button onclick="navigate('page-three')">Go to Page Three</nav-button>
        </nav-content>
      `;
    }
  }

  class PageThree extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav-content class="nav-padding">
          <h1>Page Three</h1>
          <nav-button onclick="navigateBack()">Go Back</nav-button>
          <nav-button onclick="navigateToRoot()">Go to Root</nav-button>
        </nav-content>
      `;
    }
  }

  customElements.define('page-one', PageOne);
  customElements.define('page-two', PageTwo);
  customElements.define('page-three', PageThree);
</script>
```
