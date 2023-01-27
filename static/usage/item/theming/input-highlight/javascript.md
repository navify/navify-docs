```html
<nav-item lines="full" class="item-has-focus nav-touched">
  <nav-label position="stacked">Custom Input Highlight: Focused</nav-label>
  <nav-input></nav-input>
</nav-item>

<nav-item lines="full" class="item-has-focus nav-touched nav-valid">
  <nav-label position="stacked">Custom Input Highlight: Focused & Valid</nav-label>
  <nav-input></nav-input>
</nav-item>

<nav-item lines="full" class="item-has-focus nav-touched nav-invalid">
  <nav-label position="stacked">Custom Input Highlight: Focused & Invalid</nav-label>
  <nav-input></nav-input>
</nav-item>

<style>
  nav-item {
    --highlight-height: 2px;
    --highlight-color-focused: #43e7f3;
    --highlight-color-valid: #6f58d8;
    --highlight-color-invalid: #ff46be;
  }
</style>
```
