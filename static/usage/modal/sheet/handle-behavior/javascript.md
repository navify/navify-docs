```html
<nav-header>
  <nav-toolbar>
    <nav-title>App</nav-title>
  </nav-toolbar>
</nav-header>
<nav-content class="nav-padding">
  <nav-button id="open-modal" expand="block">Open Sheet Modal</nav-button>

  <nav-modal trigger="open-modal" initial-breakpoint="0.25" handle-behavior="cycle">
    <nav-content class="nav-padding">
      <div class="nav-margin-top">
        <nav-label>Click the handle above to advance to the next breakpoint.</nav-label>
      </div>
    </nav-content>
  </nav-modal>
</nav-content>

<script>
  var modal = document.querySelector('nav-modal');

  modal.breakpoints = [0, 0.25, 0.5, 0.75];
</script>
```
