```html
<template>
  <nav-breadcrumbs>
    <nav-breadcrumb href="#home">
      Home
      <nav-icon slot="separator" :icon="arrowForwardCircle"></nav-icon>
    </nav-breadcrumb>
    <nav-breadcrumb href="#electronics">
      Electronics
      <nav-icon slot="separator" :icon="arrowForwardCircle"></nav-icon>
    </nav-breadcrumb>
    <nav-breadcrumb href="#cameras">
      Cameras
      <nav-icon slot="separator" :icon="arrowForwardCircle"></nav-icon>
    </nav-breadcrumb>
    <nav-breadcrumb href="#film">
      Film
      <nav-icon slot="separator" :icon="arrowForwardCircle"></nav-icon>
    </nav-breadcrumb>
  </nav-breadcrumbs>
</template>

<script lang="ts">
  import { NavBreadcrumb, NavBreadcrumbs, NavIcon } from '@navify/kdu';
  import { defineComponent } from 'kdu';
  import { arrowForwardCircle } from 'navicons/icons';

  export default defineComponent({
    components: { NavBreadcrumb, NavBreadcrumbs, NavIcon },
    setup() {
      return { arrowForwardCircle };
    }
  });
</script>
```
