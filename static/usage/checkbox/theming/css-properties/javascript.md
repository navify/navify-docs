```html
<nav-item>
  <nav-checkbox slot="start"></nav-checkbox>
  <nav-label>Themed checkbox</nav-label>
</nav-item>

<style>
  nav-checkbox {
    --size: 32px;
    --background-checked: #6815ec;
  }
  
  nav-checkbox::part(container) {
    border-radius: 6px;
    border: 2px solid #6815ec;
  }
</style>
```
