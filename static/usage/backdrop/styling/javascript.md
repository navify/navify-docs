```html
<style>
  nav-backdrop {
    opacity: 0.9;
    background: var(--nav-color-primary);
  }

  #box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--nav-background-color, #fff);
    width: 90%;
    height: 100px;
    border-radius: 10px;
  }
</style>

<nav-backdrop visible="true"></nav-backdrop>
<div class="nav-page">
  <nav-header>
    <nav-toolbar>
      <nav-title>Backdrop</nav-title>
    </nav-toolbar>
  </nav-header>
  <nav-content class="nav-padding">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, cum aspernatur cupiditate nesciunt totam
      perspiciatis delectus soluta laboriosam, ullam impedit porro eaque laborum optio natus sed nostrum, provident
      expedita vero!
    </p>
  </nav-content>
</div>
<div id="box">
  <nav-checkbox color="light"></nav-checkbox>
  <nav-button class="nav-margin-start" color="light">Clickable</nav-button>
</div>
```
