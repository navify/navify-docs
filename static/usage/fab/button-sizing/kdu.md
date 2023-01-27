```html
<template>
  <nav-fab>
    <nav-fab-button size="small">
      <nav-icon :icon="add"></nav-icon>
    </nav-fab-button>
    <nav-fab-list side="end">
      <nav-fab-button>
        <nav-icon :icon="document"></nav-icon>
      </nav-fab-button>
      <nav-fab-button>
        <nav-icon :icon="colorPalette"></nav-icon>
      </nav-fab-button>
      <nav-fab-button>
        <nav-icon :icon="globe"></nav-icon>
      </nav-fab-button>
    </nav-fab-list>
  </nav-fab>
</template>

<script lang="ts">
  import { NavFab, NavFabButton, NavFabList, NavIcon } from '@navify/kdu';
  import { add, colorPalette, document, globe } from 'navicons/icons';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavFab, NavFabButton, NavFabList, NavIcon },
    setup() {
      return { add, colorPalette, document, globe }
    }
  });
</script>
```
