```html
<nav-range pin="true"></nav-range>

<script>
  const range = document.querySelector('nav-range');
  range.pinFormatter = (value) => {
    return `${value}%`;
  };
</script>
```
