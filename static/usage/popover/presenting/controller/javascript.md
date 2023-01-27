```html
<nav-button>Click Me</nav-button>
<p></p>

<script>
  const output = document.querySelector('p');

  class PopoverPage extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `<nav-content class="nav-padding">Hello World!</nav-content>`;
    }
  }

  customElements.define('popover-page', PopoverPage);

  async function presentPopover(e) {
    const popover = Object.assign(document.createElement('nav-popover'), {
      component: 'popover-page',
      event: e
    });

    document.body.appendChild(popover);
    await popover.present();

    const { role } = await popover.onDidDismiss();
    output.innerText = `Popover dismissed with role: ${role}`;
  }

  const button = document.querySelector('nav-button');
  button.addEventListener('click', presentPopover);
</script>
```
