```html
<template>
  <nav-item>
    <nav-button slot="start">
      Start
    </nav-button>
    <nav-label>Default Buttons</nav-label>
    <nav-button slot="end">
      End
    </nav-button>
  </nav-item>

  <nav-item>
    <nav-button slot="start">
      Start
      <nav-icon :icon="home" slot="end"></nav-icon>
    </nav-button>
    <nav-label>Buttons with Icons</nav-label>
    <nav-button slot="end">
      <nav-icon :icon="star" slot="end"></nav-icon>
      End
    </nav-button>
  </nav-item>

  <nav-item>
    <nav-button slot="start">
      <nav-icon slot="icon-only" :icon="navigate"></nav-icon>
    </nav-button>
    <nav-label>Icon only Buttons</nav-label>
    <nav-button slot="end">
      <nav-icon slot="icon-only" :icon="star"></nav-icon>
    </nav-button>
  </nav-item>

  <nav-item>
    <nav-label>Button Sizes</nav-label>
    <nav-button slot="end" size="small">
      Small
    </nav-button>
    <nav-button slot="end" size="default">
      Default
    </nav-button>
    <nav-button slot="end" size="large">
      Large
    </nav-button>
  </nav-item>
</template>

<script lang="ts">
  import { NavButton, NavIcon, NavItem, NavLabel } from '@navify/kdu';
  import { home, navigate, star } from 'navicons/icons';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton, NavIcon, NavItem, NavLabel },
    setup() {
      return { home, navigate, star }
    }
  });
</script>
```
