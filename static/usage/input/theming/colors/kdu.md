```html
<template>
  <nav-input color="primary" placeholder="Primary input"></nav-input>
  <nav-input color="secondary" placeholder="Secondary input"></nav-input>
  <nav-input color="tertiary" placeholder="Tertiary input"></nav-input>
  <nav-input color="success" placeholder="Success input"></nav-input>
  <nav-input color="warning" placeholder="Warning input"></nav-input>
  <nav-input color="danger" placeholder="Danger input"></nav-input>
  <nav-input color="light" placeholder="Light input"></nav-input>
  <nav-input color="medium" placeholder="Medium input"></nav-input>
  <nav-input color="dark" placeholder="Dark input"></nav-input>
</template>

<script lang="ts">
  import { NavInput } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavInput },
  });
</script>
```
