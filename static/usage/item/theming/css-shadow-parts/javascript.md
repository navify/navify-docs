```html
<nav-item button detail lines="full">
  <nav-label>Custom Item</nav-label>
</nav-item>

<nav-item button detail lines="full">
  <nav-label>Custom Item</nav-label>
</nav-item>

<nav-item button detail lines="full">
  <nav-label>Custom Item</nav-label>
</nav-item>

<style>
  nav-item::part(native) {
    background: #19422d;
    color: #fff;

    border-color: #fff;
    border-style: dashed;
    border-width: 2px;

    border-radius: 20px;
  }

  nav-item::part(detail-icon) {
    color: white;
    opacity: 1;
    font-size: 20px;
  }
</style>
```
