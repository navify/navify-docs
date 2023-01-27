```html
<template>
  <nav-list>
    <nav-item>
      <nav-label>Default label</nav-label>
      <nav-input placeholder="Enter text"></nav-input>
    </nav-item>

    <nav-item>
      <nav-label position="fixed">Fixed label</nav-label>
      <nav-input placeholder="Enter text"></nav-input>
    </nav-item>

    <nav-item>
      <nav-label position="stacked">Stacked label</nav-label>
      <nav-input placeholder="Enter text"></nav-input>
    </nav-item>

    <nav-item>
      <nav-label position="floating">Floating label</nav-label>
      <nav-input placeholder="Enter text"></nav-input>
    </nav-item>
  </nav-list>
</template>

<script lang="ts">
  import { NavInput, NavItem, NavLabel, NavList } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavInput, NavItem, NavLabel, NavList },
  });
</script>
```
