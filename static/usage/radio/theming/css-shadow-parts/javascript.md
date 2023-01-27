```html
<nav-radio-group value="custom-checked">
  <nav-radio value="custom"></nav-radio>
  <nav-radio value="custom-checked"></nav-radio>
</nav-radio-group>

<style>
  nav-radio {
    width: 30px;
    height: 30px;
  }

  nav-radio::part(container) {
    border-radius: 8px;
    border: 2px solid #ddd;
  }

  nav-radio::part(mark) {
    background: none;
    transition: none;
    transform: none;
    border-radius: 0;
  }

  nav-radio.radio-checked::part(container) {
    background: #6815ec;
    border-color: transparent;
  }

  nav-radio.radio-checked::part(mark) {
    width: 6px;
    height: 10px;

    border-width: 0px 2px 2px 0px;
    border-style: solid;
    border-color: #fff;

    transform: rotate(45deg);
  }
</style>
```
