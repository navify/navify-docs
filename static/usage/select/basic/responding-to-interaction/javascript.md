```html
<nav-list>
  <nav-item>
    <nav-select placeholder="Select fruit">
      <nav-select-option value="apples">Apples</nav-select-option>
      <nav-select-option value="oranges">Oranges</nav-select-option>
      <nav-select-option value="bananas">Bananas</nav-select-option>
    </nav-select>
  </nav-item>
</nav-list>
<div id="log" class="nav-padding"></div>

<script>
  const select = document.querySelector('nav-select');
  const log = document.querySelector('#log');

  select.addEventListener('navChange', e => {
    log.insertAdjacentHTML('afterbegin', `<p>navChange fired with value: ${e.detail.value}</p>`);
  });

  select.addEventListener('navCancel', () => {
    log.insertAdjacentHTML('afterbegin', '<p>navCancel fired</p>');
  });

  select.addEventListener('navDismiss', () => {
    log.insertAdjacentHTML('afterbegin', '<p>navDismiss fired</p>');
  });
</script>
```
