```html
<template>
  <nav-range @navKnobMoveStart="onNavKnobMoveStart" @navKnobMoveEnd="onNavKnobMoveEnd"></nav-range>
  <div>
    <nav-label>navKnobMoveStart: {{moveStart}}</nav-label>
  </div>
  <div>
    <nav-label>onNavKnobMoveEnd: {{moveEnd}}</nav-label>
  </div>
</template>

<script lang="ts">
  import { NavLabel, NavRange } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavLabel, NavRange },
    data() {
      return {
        moveStart: '',
        moveEnd: '',
      };
    },
    methods: {
      onNavKnobMoveStart({ detail }) {
        this.moveStart = detail.value;
      },
      onNavKnobMoveEnd({ detail }) {
        this.moveEnd = detail.value;
      },
    },
  });
</script>
```
