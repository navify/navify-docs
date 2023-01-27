```html
<template>
  <nav-button id="click-trigger">Left-Click Me</nav-button>
  <nav-popover trigger="click-trigger" trigger-action="click">
    <nav-content class="nav-padding">Hello World!</nav-content>
  </nav-popover>

  <nav-button id="context-menu-trigger">Right-Click Me</nav-button>
  <nav-popover trigger="context-menu-trigger" trigger-action="context-menu">
    <nav-content class="nav-padding">Hello World!</nav-content>
  </nav-popover>

  <nav-button id="hover-trigger">Hover Over Me</nav-button>
  <nav-popover trigger="hover-trigger" trigger-action="hover">
    <nav-content class="nav-padding">Hello World!</nav-content>
  </nav-popover>
</template>

<script lang="ts">
  import { NavButton, NavContent, NavPopover } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton, NavContent, NavPopover },
  });
</script>
```
