```html
<template>
  <b>Column 1 has <code>size</code> set to <code>"auto"</code></b>
  <nav-grid>
    <nav-row>
      <nav-col size="auto">1</nav-col>
      <nav-col>2</nav-col>
      <nav-col>3</nav-col>
    </nav-row>
  </nav-grid>

  <b>Column 3 contains an input and has <code>size</code> set to <code>"auto"</code></b>
  <nav-grid>
    <nav-row>
      <nav-col>1</nav-col>
      <nav-col>2</nav-col>
      <nav-col size="auto">
        <nav-input placeholder="3"></nav-input>
      </nav-col>
      <nav-col>4</nav-col>
      <nav-col>5</nav-col>
      <nav-col>6</nav-col>
    </nav-row>
  </nav-grid>

  <b>Column 2 has <code>size</code> set to <code>"auto"</code> and a defined width</b>
  <nav-grid>
    <nav-row>
      <nav-col>1</nav-col>
      <nav-col size="auto">
        <div style="width: 150px">2</div>
      </nav-col>
    </nav-row>
  </nav-grid>
</template>

<script lang="ts">
  import { NavCol, NavGrid, NavInput, NavRow } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavCol, NavGrid, NavInput, NavRow },
  });
</script>

<style scoped>
  nav-col {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
  }
</style>
```
