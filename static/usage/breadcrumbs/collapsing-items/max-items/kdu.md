```html
<template>
  <nav-breadcrumbs :max-items="4">
    <nav-breadcrumb href="#home">Home</nav-breadcrumb>
    <nav-breadcrumb href="#electronics">Electronics</nav-breadcrumb>
    <nav-breadcrumb href="#photography">Photography</nav-breadcrumb>
    <nav-breadcrumb href="#cameras">Cameras</nav-breadcrumb>
    <nav-breadcrumb href="#film">Film</nav-breadcrumb>
    <nav-breadcrumb href="#35mm">35 mm</nav-breadcrumb>
  </nav-breadcrumbs>
</template>

<script lang="ts">
  import { NavBreadcrumb, NavBreadcrumbs } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavBreadcrumb, NavBreadcrumbs },
  });
</script>
```
