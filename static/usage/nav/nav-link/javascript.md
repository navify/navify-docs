```html
<nav-app>
  <nav-nav root="page-one"></nav-nav>
</nav-app>

<script>
  class PageOne extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav-header>
          <nav-toolbar>
            <nav-title>Page One</nav-title>
          </nav-toolbar>
        </nav-header>
        <nav-content class="nav-padding">
          <h1>Page One</h1>
          <nav-nav-link router-direction="forward" component="page-two">
            <nav-button>Go to Page Two</nav-button>
          </nav-nav-link>
        </nav-content>
      `;
    }
  }
  class PageTwo extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav-header>
          <nav-toolbar>
            <nav-buttons slot="start">
              <nav-back-button></nav-back-button>
            </nav-buttons>
            <nav-title>Page Two</nav-title>
          </nav-toolbar>
        </nav-header>
        <nav-content class="nav-padding">
          <h1>Page Two</h1>
          <div>
            <nav-nav-link router-direction="forward" component="page-three">
              <nav-button>Go to Page Three</nav-button>
            </nav-nav-link>
          </div>
        </nav-content>
      `;
    }
  }
  class PageThree extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav-header>
          <nav-toolbar>
            <nav-buttons slot="start">
              <nav-back-button></nav-back-button>
            </nav-buttons>
            <nav-title>Page Three</nav-title>
          </nav-toolbar>
        </nav-header>
        <nav-content class="nav-padding">
          <h1>Page Three</h1>
        </nav-content>
      `;
    }
  }
  customElements.define('page-one', PageOne);
  customElements.define('page-two', PageTwo);
  customElements.define('page-three', PageThree);
</script>
```
