```html
<template>
  <nav-toolbar>
    <nav-buttons slot="start">
      <nav-button>Start</nav-button>
    </nav-buttons>
    <nav-title>Buttons</nav-title>
    <nav-buttons slot="end">
      <nav-button>End</nav-button>
    </nav-buttons>
  </nav-toolbar>

  <nav-toolbar>
    <nav-buttons slot="secondary">
      <nav-button>Secondary</nav-button>
    </nav-buttons>
    <nav-title>Buttons</nav-title>
    <nav-buttons slot="primary">
      <nav-button>Primary</nav-button>
    </nav-buttons>
  </nav-toolbar>
</template>

<script lang="ts">
  import { NavButton, NavButtons, NavTitle, NavToolbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton, NavButtons, NavTitle, NavToolbar },
  });
</script>
```
