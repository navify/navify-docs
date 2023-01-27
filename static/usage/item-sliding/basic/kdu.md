```html
<template>
  <nav-list>
    <nav-item-sliding>
      <nav-item>
        <nav-label>Sliding Item with End Options</nav-label>
      </nav-item>

      <nav-item-options>
        <nav-item-option>Favorite</nav-item-option>
        <nav-item-option color="danger">Delete</nav-item-option>
      </nav-item-options>
    </nav-item-sliding>

    <nav-item-sliding>
      <nav-item-options side="start">
        <nav-item-option color="success">Archive</nav-item-option>
      </nav-item-options>

      <nav-item>
        <nav-label>Sliding Item with Start Options</nav-label>
      </nav-item>
    </nav-item-sliding>

    <nav-item-sliding>
      <nav-item-options side="start">
        <nav-item-option color="success">Archive</nav-item-option>
      </nav-item-options>

      <nav-item>
        <nav-label>Sliding Item with Options on Both Sides</nav-label>
      </nav-item>

      <nav-item-options side="end">
        <nav-item-option>Favorite</nav-item-option>
        <nav-item-option color="danger">Delete</nav-item-option>
      </nav-item-options>
    </nav-item-sliding>
  </nav-list>
</template>

<script lang="ts">
  import { NavItem, NavItemOption, NavItemOptions, NavItemSliding, NavLabel, NavList } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavItemOption, NavItemOptions, NavItemSliding, NavLabel, NavList },
  });
</script>
```
