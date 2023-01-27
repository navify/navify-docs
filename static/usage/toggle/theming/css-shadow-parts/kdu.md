```html
<template>
  <nav-toggle></nav-toggle>
  <nav-toggle :checked="true"></nav-toggle>
</template>

<script lang="ts">
  import { NavToggle } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavToggle },
  });
</script>

<style scoped>
  nav-toggle {
    height: 10px;
    width: 65px;

    padding: 12px;

    --handle-width: 25px;
    --handle-height: 27px;
    --handle-max-height: auto;
    --handle-spacing: 6px;

    /* Required for iOS handle to overflow the height of the track */
    overflow: visible;
    contain: none;
  }

  nav-toggle::part(track),
  nav-toggle.toggle-checked::part(track) {
    background: #ddd;
  }

  nav-toggle::part(handle) {
    background: #eb7769;

    border-radius: 4px;
    box-shadow: none;
  }

  nav-toggle.toggle-checked::part(handle) {
    background: #95c34e;
  }
</style>
```
