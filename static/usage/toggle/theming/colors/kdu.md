```html
<template>
  <nav-toggle color="primary" :checked="true"></nav-toggle>
  <nav-toggle color="secondary" :checked="true"></nav-toggle>
  <nav-toggle color="tertiary" :checked="true"></nav-toggle>
  <nav-toggle color="success" :checked="true"></nav-toggle>
  <nav-toggle color="warning" :checked="true"></nav-toggle>
  <nav-toggle color="danger" :checked="true"></nav-toggle>
  <nav-toggle color="light" :checked="true"></nav-toggle>
  <nav-toggle color="medium" :checked="true"></nav-toggle>
  <nav-toggle color="dark" :checked="true"></nav-toggle>
</template>

<script lang="ts">
  import { NavToggle } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavToggle },
  });
</script>
```
