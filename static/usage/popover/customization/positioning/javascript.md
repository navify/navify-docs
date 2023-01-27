```html
<div class="container">
  <nav-button id="top-center">Side=Top, Alignment=Center</nav-button>
  <nav-popover trigger="top-center" side="top" alignment="center">
    <nav-content class="nav-padding">Hello World!</nav-content>
  </nav-popover>

  <nav-button id="bottom-start">Side=Bottom, Alignment=Start</nav-button>
  <nav-popover trigger="bottom-start" side="bottom" alignment="start">
    <nav-content class="nav-padding">Hello World!</nav-content>
  </nav-popover>

  <nav-button id="left-start">Side=Left, Alignment=Start</nav-button>
  <nav-popover trigger="left-start" side="left" alignment="start">
    <nav-content class="nav-padding">Hello World!</nav-content>
  </nav-popover>

  <nav-button id="right-end">Side=Right, Alignment=End</nav-button>
  <nav-popover trigger="right-end" side="right" alignment="end">
    <nav-content class="nav-padding">Hello World!</nav-content>
  </nav-popover>
</div>

<style>
  nav-popover {
    --width: 80px;
  }

  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 80px;
  }
</style>
```
