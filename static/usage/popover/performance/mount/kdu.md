```html
<template>
  <nav-content>
    <nav-button id="open-popover">Open Popover</nav-button>
    <nav-popover :keep-contents-mounted="true" trigger="open-popover">
      <nav-content class="nav-padding">This content was mounted as soon as the popover was created.</nav-content>
    </nav-popover>
  </nav-content>
</template>

<script lang="ts">
  import { NavButton, NavContent, NavPopover } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton, NavContent, NavPopover },
  });
</script>
```
