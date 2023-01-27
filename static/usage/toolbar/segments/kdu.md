```html
<template>
  <nav-header>
    <nav-toolbar>
      <nav-segment value="all">
        <nav-segment-button value="all">
          All
        </nav-segment-button>
        <nav-segment-button value="favorites">
          Favorites
        </nav-segment-button>
      </nav-segment>
    </nav-toolbar>
  </nav-header>
</template>

<script lang="ts">
  import { NavHeader, NavSegment, NavSegmentButton, NavTitle, NavToolbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavHeader, NavSegment, NavSegmentButton, NavTitle, NavToolbar },
  });
</script>
```
