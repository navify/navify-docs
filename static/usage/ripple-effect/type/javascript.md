```html
<div class="wrapper">
  <b>Click on a shape to see the ripple</b>

  <div class="nav-activatable ripple-parent rounded-rectangle">
    Bounded
    <nav-ripple-effect></nav-ripple-effect>
  </div>

  <div class="nav-activatable ripple-parent circle">
    Unbounded
    <nav-ripple-effect type="unbounded"></nav-ripple-effect>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: space-between;
    text-align: center;

    height: 170px;
    width: 400px;

    margin: 0 auto;
  }

  b {
    width: 100%;
  }

  .ripple-parent {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    overflow: hidden;

    border: 1px solid #ddd;

    user-select: none;
  }

  .rounded-rectangle {
    width: 250px;
    height: 75px;
    border-radius: 8px;
  }

  .circle {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
</style>
```
