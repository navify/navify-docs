```html
<template>
  <nav-item>
    <nav-label>
      Default Item Lines
    </nav-label>
  </nav-item>

  <nav-item lines="inset">
    <nav-label>Item Lines Inset</nav-label>
  </nav-item>

  <nav-item lines="full">
    <nav-label>Item Lines Full</nav-label>
  </nav-item>

  <nav-item lines="none">
    <nav-label>Item Lines None</nav-label>
  </nav-item>

  <nav-item>
    <nav-icon :icon="star" slot="start"></nav-icon>
    <nav-label>Default Item Lines</nav-label>
    <nav-icon :icon="informationCircle" slot="end"></nav-icon>
  </nav-item>

  <nav-item lines="inset">
    <nav-icon :icon="star" slot="start"></nav-icon>
    <nav-label>Item Lines Inset</nav-label>
    <nav-icon :icon="informationCircle" slot="end"></nav-icon>
  </nav-item>

  <nav-item lines="full">
    <nav-icon :icon="star" slot="start"></nav-icon>
    <nav-label>Item Lines Full</nav-label>
    <nav-icon :icon="informationCircle" slot="end"></nav-icon>
  </nav-item>

  <nav-item lines="none">
    <nav-icon :icon="star" slot="start"></nav-icon>
    <nav-label>Item Lines None</nav-label>
    <nav-icon :icon="informationCircle" slot="end"></nav-icon>
  </nav-item>
</template>

<script lang="ts">
  import { NavIcon, NavItem, NavLabel } from '@navify/kdu';
  import { informationCircle, star } from 'navicons/icons';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavIcon, NavItem, NavLabel },
    setup() {
      return { informationCircle, star };
    }
  });
</script>
```
