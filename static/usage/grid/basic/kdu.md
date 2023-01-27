```html
<template>
  <nav-grid>
    <nav-row>
      <nav-col>1</nav-col>
      <nav-col>2</nav-col>
      <nav-col>3</nav-col>
    </nav-row>
  </nav-grid>

  <nav-grid>
    <nav-row>
      <nav-col>1</nav-col>
      <nav-col>2</nav-col>
      <nav-col>3</nav-col>
      <nav-col>4</nav-col>
      <nav-col>5</nav-col>
      <nav-col>6</nav-col>
    </nav-row>
  </nav-grid>

  <nav-grid>
    <nav-row>
      <nav-col>1</nav-col>
      <nav-col>2</nav-col>
      <nav-col>3</nav-col>
      <nav-col>4</nav-col>
      <nav-col>5</nav-col>
      <nav-col>6</nav-col>
      <nav-col>7</nav-col>
      <nav-col>8</nav-col>
      <nav-col>9</nav-col>
      <nav-col>10</nav-col>
      <nav-col>11</nav-col>
      <nav-col>12</nav-col>
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
