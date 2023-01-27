```html
<nav-range></nav-range>
<nav-label>navChange emitted value: <span id="lastValue"></span></nav-label>

<script>
  const range = document.querySelector('nav-range');
  const lastEmittedValue = document.querySelector('#lastValue');

  range.addEventListener('navChange', ({ detail }) => {
    lastEmittedValue.innerHTML = detail.value;
  });
</script>
```
