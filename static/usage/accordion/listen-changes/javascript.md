```html
<nav-accordion-group>
  <nav-accordion value="first">
    <nav-item slot="header" color="light">
      <nav-label>First Accordion</nav-label>
    </nav-item>
    <div class="nav-padding" slot="content">First Content</div>
  </nav-accordion>
  <nav-accordion value="second">
    <nav-item slot="header" color="light">
      <nav-label>Second Accordion</nav-label>
    </nav-item>
    <div class="nav-padding" slot="content">Second Content</div>
  </nav-accordion>
  <nav-accordion value="third">
    <nav-item slot="header" color="light">
      <nav-label>Third Accordion</nav-label>
    </nav-item>
    <div class="nav-padding" slot="content">Third Content</div>
  </nav-accordion>
</nav-accordion-group>

<p class="listener-out"></p>

<script>
  const accordionGroup = document.querySelector('nav-accordion-group');
  const listenerOut = document.querySelector('.listener-out');
  const values = ['first', 'second', 'third'];

  accordionGroup.addEventListener('navChange', (ev) => {
    const collapsedItems = values.filter((value) => value !== ev.detail.value);
    const selectedValue = ev.detail.value;

    listenerOut.innerText = `
      Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value}
      Collapsed: ${collapsedItems.join(', ')}
    `;
  });
</script>
```
