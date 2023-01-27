```html
<nav-datetime>
  <nav-buttons slot="buttons">
    <nav-button color="danger" onclick="datetime.reset()">Reset</nav-button>
    <nav-button color="primary" onclick="datetime.cancel()">Never mind</nav-button>
    <nav-button color="primary" onclick="datetime.confirm()">All Set</nav-button>
  </nav-buttons>
</nav-datetime>

<script>
  var datetime = document.querySelector('nav-datetime');
</script>
```
