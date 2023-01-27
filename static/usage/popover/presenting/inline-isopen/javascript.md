```html
<nav-button>Click Me</nav-button>
<nav-popover>
  <nav-content class="nav-padding">Hello World!</nav-content>
</nav-popover>

<script>
  const button = document.querySelector('nav-button');
  const popover = document.querySelector('nav-popover');

  button.addEventListener('click', e => {
    popover.event = e;
    popover.isOpen = true;
  });

  popover.addEventListener('didDismiss', () => popover.isOpen = false);
</script>
```
