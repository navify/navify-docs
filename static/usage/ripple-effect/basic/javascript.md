```html
<div class="wrapper">
  <b>Click on a shape to see the ripple</b>

  <div class="nav-activatable ripple-parent rectangle">
    <nav-ripple-effect></nav-ripple-effect>
  </div>

  <div class="nav-activatable ripple-parent rounded-rectangle">
    <nav-ripple-effect></nav-ripple-effect>
  </div>

  <div class="nav-activatable ripple-parent circle">
    <nav-ripple-effect></nav-ripple-effect>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: space-between;
    text-align: center;

    height: 300px;
    width: 300px;

    margin: 0 auto;
  }

  b {
    width: 100%;
  }

  .ripple-parent {
    position: relative;
    overflow: hidden;

    border: 1px solid #ddd;
  }

  .rectangle {
    width: 300px;
    height: 150px;
  }

  .rounded-rectangle {
    width: 185px;
    height: 65px;
    border-radius: 8px;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
</style>
```
