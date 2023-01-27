```html
<template>
  <nav-item>
    <nav-label>Default Label</nav-label>
    <nav-input placeholder="Enter text"></nav-input>
  </nav-item>

  <nav-item>
    <nav-label position="fixed">Fixed Label</nav-label>
    <nav-input placeholder="Enter text"></nav-input>
  </nav-item>

  <nav-item>
    <nav-label position="floating">Floating Label</nav-label>
    <nav-input placeholder="Enter text"></nav-input>
  </nav-item>

  <nav-item>
    <nav-label position="stacked">Stacked Label</nav-label>
    <nav-input placeholder="Enter text"></nav-input>
  </nav-item>

  <nav-item>
    <nav-label>Toggle</nav-label>
    <nav-toggle slot="end" checked></nav-toggle>
  </nav-item>

  <nav-item>
    <nav-checkbox slot="start" checked></nav-checkbox>
    <nav-label>Checkbox</nav-label>
  </nav-item>
</template>

<script lang="ts">
  import { NavCheckbox, NavInput, NavItem, NavLabel, NavToggle } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavCheckbox, NavInput, NavItem, NavLabel, NavToggle },
  });
</script>
```
