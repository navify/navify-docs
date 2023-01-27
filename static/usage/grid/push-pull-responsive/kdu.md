```html
<template>
  <b>No change for xs breakpoint, push 1st column & pull 2nd column for sm and up</b>
  <nav-grid>
    <nav-row>
      <nav-col push-sm="6">1</nav-col>
      <nav-col pull-sm="6">2</nav-col>
    </nav-row>
  </nav-grid>

  <b>No change for xs breakpoint, push middle columns & pull last column for md and up</b>
  <nav-grid>
    <nav-row>
      <nav-col>1</nav-col>
      <nav-col push-md="3">2</nav-col>
      <nav-col push-md="3">3</nav-col>
      <nav-col pull-md="6">4</nav-col>
    </nav-row>
  </nav-grid>

  <b>Switch first and last 3 columns for xs breakpoints, reverse columns for lg and up</b>
  <nav-grid>
    <nav-row>
      <nav-col push="6" push-lg="10">1</nav-col>
      <nav-col push="6" push-lg="6">2</nav-col>
      <nav-col push="6" push-lg="2">3</nav-col>
      <nav-col pull="6" pull-lg="2">4</nav-col>
      <nav-col pull="6" pull-lg="6">5</nav-col>
      <nav-col pull="6" pull-lg="10">6</nav-col>
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
