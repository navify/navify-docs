```html
<template>
  <b>Columns aligned at the start</b>
  <nav-grid>
    <nav-row class="nav-justify-content-start">
      <nav-col size="3">
        1
      </nav-col>
      <nav-col size="3">
        2
      </nav-col>
    </nav-row>
  </nav-grid>

  <b>Columns aligned at the center</b>
  <nav-grid>
    <nav-row class="nav-justify-content-center">
      <nav-col size="3">
        1
      </nav-col>
      <nav-col size="3">
        2
      </nav-col>
    </nav-row>
  </nav-grid>

  <b>Columns aligned at the end</b>
  <nav-grid>
    <nav-row class="nav-justify-content-end">
      <nav-col size="3">
        1
      </nav-col>
      <nav-col size="3">
        2
      </nav-col>
    </nav-row>
  </nav-grid>

  <b>Columns aligned with space around</b>
  <nav-grid>
    <nav-row class="nav-justify-content-around">
      <nav-col size="3">
        1
      </nav-col>
      <nav-col size="3">
        2
      </nav-col>
    </nav-row>
  </nav-grid>

  <b>Columns aligned with space between</b>
  <nav-grid>
    <nav-row class="nav-justify-content-between">
      <nav-col size="3">
        1
      </nav-col>
      <nav-col size="3">
        2
      </nav-col>
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
