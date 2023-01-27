```html
<template>
  <nav-list>
    <nav-radio-group value="strawberries">
      <nav-item>
        <nav-label>Grapes</nav-label>
        <nav-radio slot="end" value="grapes"></nav-radio>
      </nav-item>

      <nav-item>
        <nav-label>Strawberries</nav-label>
        <nav-radio slot="end" value="strawberries"></nav-radio>
      </nav-item>

      <nav-item>
        <nav-label>Pineapple</nav-label>
        <nav-radio slot="end" value="pineapple"></nav-radio>
      </nav-item>

      <nav-item>
        <nav-label>Cherries (Disabled)</nav-label>
        <nav-radio slot="end" value="cherries" :disabled="true"></nav-radio>
      </nav-item>
    </nav-radio-group>
  </nav-list>
</template>

<script lang="ts">
  import { NavItem, NavLabel, NavList, NavRadio, NavRadioGroup } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavLabel, NavList, NavRadio, NavRadioGroup },
  });
</script>
```
