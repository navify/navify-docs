```html
<template>
  <nav-segment :scrollable="true" value="heart">
    <nav-segment-button value="home">
      <nav-icon :icon="home"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="heart">
      <nav-icon :icon="heart"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="pin">
      <nav-icon :icon="pin"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="star">
      <nav-icon :icon="star"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="call">
      <nav-icon :icon="call"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="globe">
      <nav-icon :icon="globe"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="basket">
      <nav-icon :icon="basket"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="barbell">
      <nav-icon :icon="barbell"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="trash">
      <nav-icon :icon="trash"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="person">
      <nav-icon :icon="person"></nav-icon>
    </nav-segment-button>
  </nav-segment>
</template>

<script lang="ts">
  import { NavIcon, NavSegment, NavSegmentButton } from '@navify/kdu';
  import { home, heart, pin, star, call, globe, basket, barbell, trash, person } from 'navicons/icons';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavIcon, NavSegment, NavSegmentButton },
    setup() {
      return {
        home, heart, pin, star, call, globe, basket, barbell, trash, person
      }
    }
  });
</script>
```
