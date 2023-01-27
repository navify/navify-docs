```html
<template>
  <nav-item>
    <nav-label>
      Default Icon
    </nav-label>
    <nav-icon :icon="informationCircle" slot="end"></nav-icon>
  </nav-item>

  <nav-item>
    <nav-label>
      Large Icon
    </nav-label>
    <nav-icon :icon="informationCircle" size="large" slot="end"></nav-icon>
  </nav-item>

  <nav-item>
    <nav-label>
      Small Icon
    </nav-label>
    <nav-icon :icon="informationCircle" size="small" slot="end"></nav-icon>
  </nav-item>

  <nav-item>
    <nav-icon :icon="star" slot="start"></nav-icon>
    <nav-label>
      Default Icon
    </nav-label>
  </nav-item>
</template>

<script lang="ts">
  import { NavButton, NavIcon, NavItem, NavLabel } from '@navify/kdu';
  import { informationCircle, star } from 'navicons/icons';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton, NavIcon, NavItem, NavLabel },
    setup() {
      return { informationCircle, star }
    }
  });
</script>
```
