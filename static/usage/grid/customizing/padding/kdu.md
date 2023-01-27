```html
<template>
  <nav-grid>
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
    --nav-grid-padding: 20px;

    --nav-grid-padding-xs: 20px;
    --nav-grid-padding-sm: 20px;
    --nav-grid-padding-md: 20px;
    --nav-grid-padding-lg: 20px;
    --nav-grid-padding-xl: 20px;

    --nav-grid-column-padding: 30px;

    --nav-grid-column-padding-xs: 30px;
    --nav-grid-column-padding-sm: 30px;
    --nav-grid-column-padding-md: 30px;
    --nav-grid-column-padding-lg: 30px;
    --nav-grid-column-padding-xl: 30px;
  }

  nav-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>
```
