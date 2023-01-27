```html
<nav-range></nav-range>
<div>
  <nav-label>navKnobMoveStart: <span id="moveStart"></span></nav-label>
</div>
<div>
  <nav-label>navKnobMoveEnd: <span id="moveEnd"></span></nav-label>
</div>

<script>
  const range = document.querySelector('nav-range');
  const moveStart = document.querySelector('#moveStart');
  const moveEnd = document.querySelector('#moveEnd');

  range.addEventListener('navKnobMoveStart', ({ detail }) => {
    moveStart.innerHTML = detail.value;
  });

  range.addEventListener('navKnobMoveEnd', ({ detail }) => {
    moveEnd.innerHTML = detail.value;
  });
</script>
```
