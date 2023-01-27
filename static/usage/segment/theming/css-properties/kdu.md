```html
<template>
  <nav-segment value="custom">
    <nav-segment-button value="custom">
      <nav-label>Custom</nav-label>
    </nav-segment-button>
    <nav-segment-button value="segment">
      <nav-label>Segment</nav-label>
    </nav-segment-button>
  </nav-segment>
</template>

<script lang="ts">
  import { NavLabel, NavSegment, NavSegmentButton } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavLabel, NavSegment, NavSegmentButton },
  });
</script>

<style>
  nav-segment {
    --background: #54dc98;
  }
</style>
```
