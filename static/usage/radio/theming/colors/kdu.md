```html
<template>
  <nav-radio-group value="primary">
    <nav-radio color="primary" value="primary"></nav-radio>
  </nav-radio-group>
  <nav-radio-group value="secondary">
    <nav-radio color="secondary" value="secondary"></nav-radio>
  </nav-radio-group>
  <nav-radio-group value="tertiary">
    <nav-radio color="tertiary" value="tertiary"></nav-radio>
  </nav-radio-group>
  <nav-radio-group value="success">
    <nav-radio color="success" value="success"></nav-radio>
  </nav-radio-group>
  <nav-radio-group value="warning">
    <nav-radio color="warning" value="warning"></nav-radio>
  </nav-radio-group>
  <nav-radio-group value="danger">
    <nav-radio color="danger" value="danger"></nav-radio>
  </nav-radio-group>
  <nav-radio-group value="light">
    <nav-radio color="light" value="light"></nav-radio>
  </nav-radio-group>
  <nav-radio-group value="medium">
    <nav-radio color="medium" value="medium"></nav-radio>
  </nav-radio-group>
  <nav-radio-group value="dark">
    <nav-radio color="dark" value="dark"></nav-radio>
  </nav-radio-group>
</template>

<script lang="ts">
  import { NavRadio, NavRadioGroup } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavRadio, NavRadioGroup },
  });
</script>
```
