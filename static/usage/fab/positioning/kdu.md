```html
<template>
  <nav-header>
    <nav-toolbar>
      <nav-title>Fab Buttons</nav-title>
    </nav-toolbar>
  </nav-header>
  <nav-content class="nav-padding">
    <nav-fab slot="fixed" vertical="top" horizontal="start">
      <nav-fab-button>
        <nav-icon :icon="chevronForwardCircle"></nav-icon>
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

    <nav-fab slot="fixed" vertical="top" horizontal="end" :edge="true">
      <nav-fab-button>
        <nav-icon :icon="chevronDownCircle"></nav-icon>
      </nav-fab-button>
      <nav-fab-list side="bottom">
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
      
    <nav-fab slot="fixed" vertical="bottom" horizontal="end">
      <nav-fab-button>
        <nav-icon :icon="chevronUpCircle"></nav-icon>
      </nav-fab-button>
      <nav-fab-list side="top">
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
  </nav-content>
</template>

<script lang="ts">
  import { NavContent, NavFab, NavFabButton, NavFabList, NavHeader, NavIcon, NavTitle, NavToolbar } from '@navify/kdu';
  import { chevronDownCircle, chevronForwardCircle, chevronUpCircle, colorPalette, document, globe } from 'navicons/icons';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavContent, NavFab, NavFabButton, NavFabList, NavHeader, NavIcon, NavTitle, NavToolbar },
    setup() {
      return { chevronDownCircle, chevronForwardCircle, chevronUpCircle, colorPalette, document, globe }
    }
  });
</script>
```
