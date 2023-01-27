```html
<template>
  <nav-list>
    <nav-reorder-group :disabled="isDisabled" @navItemReorder="handleReorder($event)">
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

  <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
  <nav-button @click="toggleReorder()">
    Toggle Reorder
  </nav-button>
</template>

<script lang="ts">
  import { NavButton, NavItem, NavLabel, NavList, NavReorder, NavReorderGroup } from '@navify/kdu';
  import { defineComponent, ref } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavLabel, NavList, NavReorder, NavReorderGroup },
    setup() {
      let isDisabled = ref(true);

      const handleReorder = (event: CustomEvent) => {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        event.detail.complete();
      }

      const toggleReorder = () => {
        isDisabled.value = !isDisabled.value;
      }

      return { isDisabled, handleReorder, toggleReorder }
    }
  });
</script>
```
