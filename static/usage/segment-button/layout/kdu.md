```html
<template>
  <nav-segment value="heart">
    <nav-segment-button value="call">
      <nav-icon :icon="call"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="heart">
      <nav-icon :icon="heart"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="pin">
      <nav-icon :icon="pin"></nav-icon>
    </nav-segment-button>
  </nav-segment>

  <nav-segment value="heart">
    <nav-segment-button value="call">
      <nav-label>Call</nav-label>
      <nav-icon :icon="call"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="heart">
      <nav-label>Heart</nav-label>
      <nav-icon :icon="heart"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="pin">
      <nav-label>Pin</nav-label>
      <nav-icon :icon="pin"></nav-icon>
    </nav-segment-button>
  </nav-segment>

  <nav-segment value="heart">
    <nav-segment-button value="call" layout="icon-bottom">
      <nav-label>Call</nav-label>
      <nav-icon :icon="call"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="heart" layout="icon-bottom">
      <nav-label>Heart</nav-label>
      <nav-icon :icon="heart"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="pin" layout="icon-bottom">
      <nav-label>Pin</nav-label>
      <nav-icon :icon="pin"></nav-icon>
    </nav-segment-button>
  </nav-segment>

  <nav-segment value="heart">
    <nav-segment-button value="call" layout="icon-start">
      <nav-label>Call</nav-label>
      <nav-icon :icon="call"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="heart" layout="icon-start">
      <nav-label>Heart</nav-label>
      <nav-icon :icon="heart"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="pin" layout="icon-start">
      <nav-label>Pin</nav-label>
      <nav-icon :icon="pin"></nav-icon>
    </nav-segment-button>
  </nav-segment>

  <nav-segment value="heart">
    <nav-segment-button value="call" layout="icon-end">
      <nav-label>Call</nav-label>
      <nav-icon :icon="call"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="heart" layout="icon-end">
      <nav-label>Heart</nav-label>
      <nav-icon :icon="heart"></nav-icon>
    </nav-segment-button>
    <nav-segment-button value="pin" layout="icon-end">
      <nav-label>Pin</nav-label>
      <nav-icon :icon="pin"></nav-icon>
    </nav-segment-button>
  </nav-segment>
</template>

<script lang="ts">
  import { NavIcon, NavLabel, NavSegment, NavSegmentButton } from '@navify/kdu';
  import { call, heart, pin } from 'navicons/icons';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavIcon, NavLabel, NavSegment, NavSegmentButton },
    setup() {
      return { call, heart, pin };
    }
  });
</script>
```
