```html
<template>
  <nav-fab>
    <nav-fab-button>
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

<style>
  nav-fab-button {
    --background: #b7f399;
    --background-activated: #87d361;
    --background-hover: #a3e681;
    --border-radius: 15px;
    --box-shadow: 0px 1px 2px 0px rgba(0,0,0,.3), 0px 1px 3px 1px rgba(0,0,0,.15);
    --color: black;
  }
</style>
```
