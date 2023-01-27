```html
<template>
  <nav-progress-bar type="indeterminate" color="primary"></nav-progress-bar>
  <nav-progress-bar type="indeterminate" color="secondary"></nav-progress-bar>
  <nav-progress-bar type="indeterminate" color="tertiary"></nav-progress-bar>
  <nav-progress-bar type="indeterminate" color="success"></nav-progress-bar>
  <nav-progress-bar type="indeterminate" color="warning"></nav-progress-bar>
  <nav-progress-bar type="indeterminate" color="danger"></nav-progress-bar>
  <nav-progress-bar type="indeterminate" color="light"></nav-progress-bar>
  <nav-progress-bar type="indeterminate" color="medium"></nav-progress-bar>
  <nav-progress-bar type="indeterminate" color="dark"></nav-progress-bar>
</template>

<script lang="ts">
  import { NavProgressBar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavProgressBar },
  });
</script>
```
