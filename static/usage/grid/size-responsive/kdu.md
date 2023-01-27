```html
<template>
  <b>Stacked for xs breakpoint, equal width for sm and up</b>
  <nav-grid>
    <nav-row>
      <nav-col size="12" size-sm="3">1</nav-col>
      <nav-col size="12" size-sm="3">2</nav-col>
      <nav-col size="12" size-sm="3">3</nav-col>
      <nav-col size="12" size-sm="3">4</nav-col>
    </nav-row>
  </nav-grid>

  <b>Equal width until md breakpoint, last column takes full width for md and up</b>
  <nav-grid>
    <nav-row>
      <nav-col size-md="6">1</nav-col>
      <nav-col size-md="6">2</nav-col>
      <nav-col size-md="12">3</nav-col>
    </nav-row>
  </nav-grid>

  <b>2 per row until md breakpoint, 3 per row for md, equal width for lg and up</b>
  <nav-grid>
    <nav-row>
      <nav-col size="6" size-md="4" size-lg="2">1</nav-col>
      <nav-col size="6" size-md="4" size-lg="2">2</nav-col>
      <nav-col size="6" size-md="4" size-lg="2">3</nav-col>
      <nav-col size="6" size-md="4" size-lg="2">4</nav-col>
      <nav-col size="6" size-md="4" size-lg="2">5</nav-col>
      <nav-col size="6" size-md="4" size-lg="2">6</nav-col>
    </nav-row>
  </nav-grid>
</template>

<script lang="ts">
  import { NavCol, NavGrid, NavRow } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavCol, NavGrid, NavRow },
  });
</script>

<style scoped>
  nav-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>
```
