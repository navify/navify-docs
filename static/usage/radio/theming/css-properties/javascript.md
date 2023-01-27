```html
<nav-radio-group value="custom-checked">
  <nav-radio value="custom"></nav-radio>
  <nav-radio value="custom-checked"></nav-radio>
</nav-radio-group>

<style>
  nav-radio {
    --border-radius: 4px;
    --inner-border-radius: 4px;

    --color: #ddd;
    --color-checked: #6815ec;
  }

  nav-radio.ios {
    width: 20px;
    height: 20px;

    border: 2px solid #ddd;
    border-radius: 4px;
  }

  .radio-checked.ios {
    border-color: #6815ec;
  }
</style>
```
