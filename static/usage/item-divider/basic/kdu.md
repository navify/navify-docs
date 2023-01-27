```html
<template>
  <nav-list>
    <nav-item-group>
      <nav-item-divider>
        <nav-label>
          Section A
        </nav-label>
      </nav-item-divider>

      <nav-item>
        <nav-label>A1</nav-label>
      </nav-item>
      <nav-item>
        <nav-label>A2</nav-label>
      </nav-item>
      <nav-item lines="none">
        <nav-label>A3</nav-label>
      </nav-item>
    </nav-item-group>

    <nav-item-group>
      <nav-item-divider>
        <nav-label>
          Section B
        </nav-label>
      </nav-item-divider>

      <nav-item>
        <nav-label>B1</nav-label>
      </nav-item>
      <nav-item>
        <nav-label>B2</nav-label>
      </nav-item>
      <nav-item lines="none">
        <nav-label>B3</nav-label>
      </nav-item>
    </nav-item-group>
  </nav-list>
</template>

<script lang="ts">
  import { NavItem, NavItemDivider, NavItemGroup, NavLabel, NavList } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavItemDivider, NavItemGroup, NavLabel, NavList },
  });
</script>
```
