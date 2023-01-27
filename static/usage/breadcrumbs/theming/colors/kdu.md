```html
<template>
  <nav-breadcrumbs>
    <nav-breadcrumb color="primary" href="#home">Home</nav-breadcrumb>
    <nav-breadcrumb color="primary" href="#electronics">Electronics</nav-breadcrumb>
    <nav-breadcrumb color="primary" href="#cameras">Cameras</nav-breadcrumb>
    <nav-breadcrumb color="primary" href="#film">Film</nav-breadcrumb>
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
