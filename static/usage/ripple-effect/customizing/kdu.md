```html
<template>
  <div class="wrapper">
    <b>Click on a shape to see the ripple</b>

    <div class="nav-activatable ripple-parent custom-parent">
      Custom Parent Color
      <nav-ripple-effect></nav-ripple-effect>
    </div>

    <div class="nav-activatable ripple-parent">
      Custom Ripple Color
      <nav-ripple-effect class="custom-ripple"></nav-ripple-effect>
    </div>
  </div>
</template>

<script lang="ts">
  import { NavRippleEffect } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavRippleEffect },
  });
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: space-between;
    text-align: center;

    height: 170px;
    width: 400px;

    margin: 0 auto;
  }

  b {
    width: 100%;
  }

  .ripple-parent {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    overflow: hidden;

    border: 1px solid #ddd;

    user-select: none;

    width: 100%;
    height: 50px;
    border-radius: 8px;
  }

  .custom-parent {
    color: #de1e7e;
  }

  .custom-ripple {
    color: #501ace;
  }
</style>
```
