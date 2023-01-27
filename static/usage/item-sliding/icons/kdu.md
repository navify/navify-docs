```html
<template>
  <nav-list>
    <nav-item-sliding>
      <nav-item-options side="start">
        <nav-item-option color="success">
          <nav-icon slot="icon-only" :icon="archive"></nav-icon>
        </nav-item-option>
      </nav-item-options>

      <nav-item>
        <nav-label>Sliding Item with Icons Only</nav-label>
      </nav-item>

      <nav-item-options side="end">
        <nav-item-option>
          <nav-icon slot="icon-only" :icon="heart"></nav-icon>
        </nav-item-option>
        <nav-item-option color="danger">
          <nav-icon slot="icon-only" :icon="trash"></nav-icon>
        </nav-item-option>
      </nav-item-options>
    </nav-item-sliding>

    <nav-item-sliding>
      <nav-item-options side="start">
        <nav-item-option color="success">
          <nav-icon slot="start" :icon="archive"></nav-icon>
          Archive
        </nav-item-option>
      </nav-item-options>

      <nav-item>
        <nav-label>
          Sliding Item with Start Icons
        </nav-label>
      </nav-item>

      <nav-item-options side="end">
        <nav-item-option>
          <nav-icon slot="start" :icon="heart"></nav-icon>
          Favorite
        </nav-item-option>
        <nav-item-option color="danger">
          <nav-icon slot="start" :icon="trash"></nav-icon>
          Delete
        </nav-item-option>
      </nav-item-options>
    </nav-item-sliding>

    <nav-item-sliding>
      <nav-item-options side="start">
        <nav-item-option color="success">
          <nav-icon slot="end" :icon="archive"></nav-icon>
          Archive
        </nav-item-option>
      </nav-item-options>

      <nav-item>
        <nav-label>
          Sliding Item with End Icons
        </nav-label>
      </nav-item>

      <nav-item-options>
        <nav-item-option>
          <nav-icon slot="end" :icon="heart"></nav-icon>
          Favorite
        </nav-item-option>
        <nav-item-option color="danger">
          <nav-icon slot="end" :icon="trash"></nav-icon>
          Delete
        </nav-item-option>
      </nav-item-options>
    </nav-item-sliding>

    <nav-item-sliding>
      <nav-item-options side="start">
        <nav-item-option color="success">
          <nav-icon slot="top" :icon="archive"></nav-icon>
          Archive
        </nav-item-option>
      </nav-item-options>

      <nav-item>
        <nav-label>
          Sliding Item with Top Icons
        </nav-label>
      </nav-item>

      <nav-item-options>
        <nav-item-option>
          <nav-icon slot="top" :icon="heart"></nav-icon>
          Favorite
        </nav-item-option>
        <nav-item-option color="danger">
          <nav-icon slot="top" :icon="trash"></nav-icon>
          Delete
        </nav-item-option>
      </nav-item-options>
    </nav-item-sliding>

    <nav-item-sliding>
      <nav-item-options side="start">
        <nav-item-option color="success">
          <nav-icon slot="bottom" :icon="archive"></nav-icon>
          Archive
        </nav-item-option>
      </nav-item-options>

      <nav-item>
        <nav-label>
          Sliding Item with Bottom Icons
        </nav-label>
      </nav-item>

      <nav-item-options>
        <nav-item-option>
          <nav-icon slot="bottom" :icon="heart"></nav-icon>
          Favorite
        </nav-item-option>
        <nav-item-option color="danger">
          <nav-icon slot="bottom" :icon="trash"></nav-icon>
          Delete
        </nav-item-option>
      </nav-item-options>
    </nav-item-sliding>
  </nav-list>
</template>

<script lang="ts">
  import { NavIcon, NavItem, NavItemOption, NavItemOptions, NavItemSliding, NavLabel, NavList } from '@navify/kdu';
  import { archive, heart, trash } from 'navicons/icons';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavIcon, NavItem, NavItemOption, NavItemOptions, NavItemSliding, NavLabel, NavList },
    setup() {
      return { archive, heart, trash }
    }
  });
</script>
```
