```html
<template>
  <nav-button>Default</nav-button>
  <nav-button color="primary">Primary</nav-button>
  <nav-button color="secondary">Secondary</nav-button>
  <nav-button color="tertiary">Tertiary</nav-button>
  <nav-button color="success">Success</nav-button>
  <nav-button color="warning">Warning</nav-button>
  <nav-button color="danger">Danger</nav-button>
  <nav-button color="light">Light</nav-button>
  <nav-button color="medium">Medium</nav-button>
  <nav-button color="dark">Dark</nav-button>
</template>

<script lang="ts">
  import { NavButton } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton },
  });
</script>
```
