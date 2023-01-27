```html
<template>
  <b>Total number of columns is set to <code>6</code>, column <code>size</code> is set to <code>1</code></b>
  <nav-grid>
    <nav-row>
      <nav-col size="1">1</nav-col>
      <nav-col size="1">2</nav-col>
      <nav-col size="1">3</nav-col>
      <nav-col size="1">4</nav-col>
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
  nav-grid {
    --nav-grid-columns: 6;
  }

  nav-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>
```
