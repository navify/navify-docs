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

<style>
  nav-breadcrumb {
    --color: rgb(81, 155, 198);
    --color-active: rgb(150, 112, 220);
    --color-hover: rgb(103, 61, 180);
  }
</style>
```
