```html
<template>
  <nav-button>
    <nav-icon slot="start" :icon="star"></nav-icon>
    Left Icon
  </nav-button>

  <nav-button>
    Right Icon
    <nav-icon slot="end" :icon="star"></nav-icon>
  </nav-button>

  <nav-button>
    <nav-icon slot="icon-only" :icon="star"></nav-icon>
  </nav-button>
</template>

<script lang="ts">
  import { NavButton, NavIcon } from '@navify/kdu';
  import { defineComponent } from 'kdu';
  import { star } from 'navicons/icons';

  export default defineComponent({
    components: { NavButton, NavIcon },
    setup() {
      return { star }
    }
  });
</script>
```
