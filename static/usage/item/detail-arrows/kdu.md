```html
<template>
  <nav-item detail="true">
    <nav-label>
      <h3>Text Item</h3>
      <p>Detail set to true - detail arrow displays on both modes</p>
    </nav-label>
  </nav-item>

  <nav-item button>
    <nav-label>
      <h3>Button Item</h3>
      <p>Default detail - detail arrow displays on iOS only</p>
    </nav-label>
  </nav-item>

  <nav-item button detail="true">
    <nav-label>
      <h3>Button Item</h3>
      <p>Detail set to true - detail arrow displays on both modes</p>
    </nav-label>
  </nav-item>

  <nav-item button detail="false">
    <nav-label>
      <h3>Button Item</h3>
      <p>Detail set to false - detail arrow hidden on both modes</p>
    </nav-label>
  </nav-item>

  <nav-item button detail="true" :detailIcon="caretForwardOutline">
    <nav-label>
      <h3>Button Item</h3>
      <p>Detail set to true - detail arrow displays on both modes</p>
      <p>Detail icon set to caret-forward-outline</p>
    </nav-label>
  </nav-item>
</template>

<script lang="ts">
  import { NavItem, NavLabel } from '@navify/kdu';
  import { caretForwardOutline } from 'navicons/icons';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavLabel },
    setup() {
      return {
        caretForwardOutline,
      };
    },
  });
</script>
