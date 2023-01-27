```html
<template>
  <nav-breadcrumbs>
    <nav-breadcrumb href="#home">Home</nav-breadcrumb>
    <nav-breadcrumb href="#electronics">Electronics</nav-breadcrumb>
    <nav-breadcrumb href="#cameras">Cameras</nav-breadcrumb>
    <nav-breadcrumb href="#film">Film</nav-breadcrumb>
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
