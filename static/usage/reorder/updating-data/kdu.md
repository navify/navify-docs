```html
<template>
  <nav-list>
    <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
    <nav-reorder-group :disabled="false" @navItemReorder="handleReorder($event)">
      <nav-item k-for="item in items">
        <nav-label>
          Item {{ item }}
        </nav-label>
        <nav-reorder slot="end"></nav-reorder>
      </nav-item>
    </nav-reorder-group>
  </nav-list>
</template>

<script lang="ts">
  import { NavItem, NavLabel, NavList, NavReorder, NavReorderGroup } from '@navify/kdu';
  import { defineComponent, ref } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavLabel, NavList, NavReorder, NavReorderGroup },
    setup() {
      const items = ref([1, 2, 3, 4, 5]);

      const handleReorder = (event: CustomEvent) => {
        // Before complete is called with the items they will remain in the
        // order before the drag
        console.log('Before complete', items.value);

        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. Update the items variable to the
        // new order of items
        items.value = event.detail.complete(items.value);

        // After complete is called the items will be in the new order
        console.log('After complete', items.value);
      }
      return { handleReorder, items }
    }
  });
</script>
```
