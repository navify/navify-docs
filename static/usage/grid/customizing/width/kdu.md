```html
<template>
  <nav-grid :fixed="true">
    <nav-row>
      <nav-col>1</nav-col>
      <nav-col>2</nav-col>
      <nav-col>3</nav-col>
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
    --nav-grid-width: 50%;

    --nav-grid-width-xs: 50%;
    --nav-grid-width-sm: 288px;
    --nav-grid-width-md: 384px;
    --nav-grid-width-lg: 480px;
    --nav-grid-width-xl: 570px;
  }

  nav-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>
```
