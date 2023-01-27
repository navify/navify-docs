```html
<template>
  <nav-segment value="custom">
    <nav-segment-button value="custom">
      <nav-label>Custom</nav-label>
    </nav-segment-button>
    <nav-segment-button value="segment">
      <nav-label>Segment</nav-label>
    </nav-segment-button>
    <nav-segment-button value="buttons">
      <nav-label>Buttons</nav-label>
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
  nav-segment-button::part(indicator-background) {
    background: #08a391;
  }

  /* Material Design styles */
  nav-segment-button.md::part(native) {
    color: #000;
  }

  .segment-button-checked.md::part(native) {
    color: #08a391;
  }

  nav-segment-button.md::part(indicator-background) {
    height: 4px;
  }

  /* iOS styles */
  nav-segment-button.ios::part(native) {
    color: #08a391;
  }

  .segment-button-checked.ios::part(native) {
    color: #fff;
  }

  nav-segment-button.ios::part(indicator-background) {
    border-radius: 20px;
  }
</style>
```
