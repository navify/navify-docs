```html
<template>
  <nav-list>
    <nav-item>
      <nav-label>Default Toggle</nav-label>
      <nav-toggle slot="end"></nav-toggle>
    </nav-item>
    <nav-item>
      <nav-label>Checked Toggle</nav-label>
      <nav-toggle slot="end" :checked="true"></nav-toggle>
    </nav-item>
    <nav-item>
      <nav-label>Disabled Toggle</nav-label>
      <nav-toggle slot="end" :disabled="true"></nav-toggle>
    </nav-item>
    <nav-item>
      <nav-label>Disabled Checked Toggle</nav-label>
      <nav-toggle slot="end" :checked="true" :disabled="true"></nav-toggle>
    </nav-item>
  </nav-list>
</template>

<script lang="ts">
  import { NavItem, NavLabel, NavList, NavToggle } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavLabel, NavList, NavToggle },
  });
</script>
```
