```html
<template>
  <nav-fab slot="fixed" horizontal="center" vertical="center">
    <nav-fab-button>
      <nav-icon :icon="add"></nav-icon>
    </nav-fab-button>
    <nav-fab-list side="top">
      <nav-fab-button>
        <nav-icon :icon="chevronUp"></nav-icon>
      </nav-fab-button>
    </nav-fab-list>
    <nav-fab-list side="end">
      <nav-fab-button>
        <nav-icon :icon="chevronForward"></nav-icon>
      </nav-fab-button>
      <nav-fab-button>
        <nav-icon :icon="chevronForward"></nav-icon>
      </nav-fab-button>
    </nav-fab-list>
    <nav-fab-list side="bottom">
      <nav-fab-button>
        <nav-icon :icon="chevronDown"></nav-icon>
      </nav-fab-button>
    </nav-fab-list>
    <nav-fab-list side="start">
      <nav-fab-button>
        <nav-icon :icon="chevronBack"></nav-icon>
      </nav-fab-button>
      <nav-fab-button>
        <nav-icon :icon="chevronBack"></nav-icon>
      </nav-fab-button>
    </nav-fab-list>
  </nav-fab>
</template>

<script lang="ts">
  import { NavFab, NavFabButton, NavFabList, NavIcon } from '@navify/kdu';
  import { add, chevronBack, chevronDown, chevronForward, chevronUp } from 'navicons/icons';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavFab, NavFabButton, NavFabList, NavIcon },
    setup() {
      return { add, chevronBack, chevronDown, chevronForward, chevronUp }
    }
  });
</script>
```
