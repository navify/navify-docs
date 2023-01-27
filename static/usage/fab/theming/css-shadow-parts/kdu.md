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
  nav-fab-button::part(native) {
    background-color: #b7f399;
    border-radius: 15px;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,.3), 0px 1px 3px 1px rgba(0,0,0,.15);
    color: black;
  }
    
  nav-fab-button::part(native):hover::after {
    background-color: #a3e681;
  }

  nav-fab-button::part(native):active::after {
    background-color: #87d361;
  }
</style>
```
