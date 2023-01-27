```html
<nav-item counter="true">
  <nav-label position="floating">Default Counter</nav-label>
  <nav-input maxlength="20"></nav-input>
</nav-item>

<nav-item id="custom-item" counter="true">
  <nav-label position="floating">Custom Counter Format</nav-label>
  <nav-input maxlength="20"></nav-input>
</nav-item>

<script>
  const customItem = document.querySelector('#custom-item');
  customItem.counterFormatter = (inputLength, maxLength) => `${maxLength - inputLength} characters remaining`;
</script>
```
