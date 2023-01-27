```html
<template>
  <nav-segment value="buttons">
    <nav-segment-button value="default">
      <nav-label>Default</nav-label>
    </nav-segment-button>
    <nav-segment-button value="segment">
      <nav-label>Segment</nav-label>
    </nav-segment-button>
    <nav-segment-button value="buttons">
      <nav-label>Button</nav-label>
    </nav-segment-button>
  </nav-segment>

  <nav-segment value="buttons">
    <nav-segment-button value="disabled" :disabled="true">
      <nav-label>Disabled</nav-label>
    </nav-segment-button>
    <nav-segment-button value="segment">
      <nav-label>Segment</nav-label>
    </nav-segment-button>
    <nav-segment-button value="buttons">
      <nav-label>Button</nav-label>
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
```
