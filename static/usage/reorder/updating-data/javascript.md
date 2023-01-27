```html
<nav-list>
  <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
  <nav-reorder-group disabled="false"></nav-reorder-group>
</nav-list>

<script>
  const reorderGroup = document.querySelector('nav-reorder-group');

  let items = [1, 2, 3, 4, 5];
  reorderItems(items);

  reorderGroup.addEventListener('navItemReorder', ({detail}) => {
    // Before complete is called with the items they will remain in the
    // order before the drag
    console.log('Before complete', items);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. Update the items variable to the
    // new order of items
    items = detail.complete(items);

    // Reorder the items in the DOM
    reorderItems(items);

    // After complete is called the items will be in the new order
    console.log('After complete', items);
  });

  function reorderItems(items) {
    reorderGroup.replaceChildren();

    let reordered = '';

    for (let i = 0; i < items.length; i++) {
      reordered += `
        <nav-item>
          <nav-label>
            Item ${items[i]}
          </nav-label>
          <nav-reorder slot="end"></nav-reorder>
        </nav-item>
      `;
    }

    reorderGroup.innerHTML = reordered;
  }
</script>
```
