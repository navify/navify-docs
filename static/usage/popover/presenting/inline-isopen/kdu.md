```html
<template>
  <nav-button @click="openPopover($event)">Click Me</nav-button>
  <nav-popover :is-open="popoverOpen" :event="event" @didDismiss="popoverOpen = false">
    <nav-content class="nav-padding">Hello World!</nav-content>
  </nav-popover>
</template>

<script lang="ts">
  import { NavButton, NavContent, NavPopover } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton, NavContent, NavPopover },
    data() {
      return {
        popoverOpen: false,
        event: null,
      };
    },
    methods: {
      openPopover(e: Event) {
        this.event = e;
        this.popoverOpen = true;
      },
    },
  });
</script>
```
