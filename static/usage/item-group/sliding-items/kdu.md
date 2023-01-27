```html
<template>
  <nav-item-group>
    <nav-item-divider>
      <nav-label>
        Fruits
      </nav-label>
    </nav-item-divider>

    <nav-item-sliding>
      <nav-item>
        <nav-label>
          Grapes
        </nav-label>
      </nav-item>
      <nav-item-options>
        <nav-item-option>
          Favorite
        </nav-item-option>
      </nav-item-options>
    </nav-item-sliding>

    <nav-item-sliding>
      <nav-item>
        <nav-label>
          Apples
        </nav-label>
      </nav-item>
      <nav-item-options>
        <nav-item-option>
          Favorite
        </nav-item-option>
      </nav-item-options>
    </nav-item-sliding>

    <nav-item-sliding>
      <nav-item lines="none">
        <nav-label>
          Bananas
        </nav-label>
      </nav-item>
      <nav-item-options>
        <nav-item-option>
          Favorite
        </nav-item-option>
      </nav-item-options>
    </nav-item-sliding>
  </nav-item-group>

  <nav-item-group>
    <nav-item-divider>
      <nav-label>
        Vegetables
      </nav-label>
    </nav-item-divider>

    <nav-item-sliding>
      <nav-item>
        <nav-label>
          Carrots
        </nav-label>
      </nav-item>
      <nav-item-options>
        <nav-item-option>
          Favorite
        </nav-item-option>
      </nav-item-options>
    </nav-item-sliding>

    <nav-item-sliding>
      <nav-item>
        <nav-label>
          Broccoli
        </nav-label>
      </nav-item>
      <nav-item-options>
        <nav-item-option>
          Favorite
        </nav-item-option>
      </nav-item-options>
    </nav-item-sliding>

    <nav-item-sliding>
      <nav-item lines="none">
        <nav-label>
          Celery
        </nav-label>
      </nav-item>
      <nav-item-options>
        <nav-item-option>
          Favorite
        </nav-item-option>
      </nav-item-options>
    </nav-item-sliding>
  </nav-item-group>
</template>

<script lang="ts">
  import { NavItem, NavItemDivider, NavItemGroup, NavItemOption, NavItemOptions, NavItemSliding, NavLabel } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavItemDivider, NavItemGroup, NavItemOption, NavItemOptions, NavItemSliding, NavLabel },
  });
</script>
```
