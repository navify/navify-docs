```html
<nav-header>
  <nav-toolbar>
    <nav-title>Example</nav-title>
  </nav-toolbar>
</nav-header>
<nav-content class="nav-padding">
  <nav-button id="open-modal" expand="block">Open Modal</nav-button>
  <nav-modal trigger="open-modal">
    <nav-header>
      <nav-toolbar>
        <nav-buttons slot="start">
          <nav-button id="close">Close</nav-button>
        </nav-buttons>
        <nav-title>Modal</nav-title>
      </nav-toolbar>
    </nav-header>
    <nav-content class="nav-padding"> This content was mounted as soon as the modal was created. </nav-content>
  </nav-modal>
</nav-content>

<script>
  var modal = document.querySelector('nav-modal');

  var closeBtn = document.querySelector('#close');
  closeBtn.addEventListener('click', () => close());

  var close = () => {
    modal.dismiss();
  };
</script>
```
