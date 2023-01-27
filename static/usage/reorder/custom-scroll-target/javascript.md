```html
<nav-content scroll-y="false">
  <div class="nav-content-scroll-host">
    <nav-list>
      <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
      <nav-reorder-group disabled="false">
        <nav-item>
          <nav-label>
            Item 1
          </nav-label>
          <nav-reorder slot="end"></nav-reorder>
        </nav-item>

        <nav-item>
          <nav-label>
            Item 2
          </nav-label>
          <nav-reorder slot="end"></nav-reorder>
        </nav-item>

        <nav-item>
          <nav-label>
            Item 3
          </nav-label>
          <nav-reorder slot="end"></nav-reorder>
        </nav-item>

        <nav-item>
          <nav-label>
            Item 4
          </nav-label>
          <nav-reorder slot="end"></nav-reorder>
        </nav-item>

        <nav-item>
          <nav-label>
            Item 5
          </nav-label>
          <nav-reorder slot="end"></nav-reorder>
        </nav-item>
      </nav-reorder-group>
    </nav-list>
  </div>
</nav-content>

<script>
  const reorderGroup = document.querySelector('nav-reorder-group');

  reorderGroup.addEventListener('navItemReorder', ({detail}) => {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', detail.from, 'to', detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    detail.complete();
  });
</script>

<style>
  .nav-content-scroll-host {
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
</style>
```
