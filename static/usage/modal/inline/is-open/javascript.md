```html
<nav-header>
  <nav-toolbar>
    <nav-title>Inline Modal</nav-title>
  </nav-toolbar>
</nav-header>
<nav-content class="nav-padding">
  <nav-button expand="block" onclick="modal.isOpen = true">Open</nav-button>
  <nav-modal>
    <nav-header>
      <nav-toolbar>
        <nav-title>Modal</nav-title>
        <nav-buttons slot="end">
          <nav-button onclick="modal.isOpen = false">Close</nav-button>
        </nav-buttons>
      </nav-toolbar>
    </nav-header>
    <nav-content class="nav-padding">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
        reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque,
        dicta.
      </p>
    </nav-content>
  </nav-modal>
</nav-content>

<script>
  var modal = document.querySelector('nav-modal');
</script>
```
