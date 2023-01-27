```html
<template>
  <nav-fab>
    <nav-fab-button>
      <nav-icon :icon="add"></nav-icon>
    </nav-fab-button>
  </nav-fab>
</template>

<script lang="ts">
  import { NavFab, NavFabButton, NavIcon } from '@navify/kdu';
  import { add } from 'navicons/icons';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavFab, NavFabButton, NavFabList, NavIcon },
    setup() {
      return { add }
    }
  });
</script>
```
