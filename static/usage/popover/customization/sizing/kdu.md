```html
<template>
  <nav-button id="auto-trigger">Size=Auto</nav-button>
  <nav-popover trigger="auto-trigger" size="auto">
    <nav-content class="nav-padding">Hello!</nav-content>
  </nav-popover>

  <nav-button id="cover-trigger">Size=Cover</nav-button>
  <nav-popover trigger="cover-trigger" size="cover">
    <nav-content class="nav-padding">Hello!</nav-content>
  </nav-popover>
</template>

<script lang="ts">
  import { NavButton, NavPopover } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton, NavPopover },
  });
</script>
```
