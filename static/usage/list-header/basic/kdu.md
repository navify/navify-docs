```html
<template>
  <nav-list>
    <nav-list-header>
      <nav-label>Video Games</nav-label>
    </nav-list-header>
    <nav-item>
      <nav-label>Pokémon Yellow</nav-label>
    </nav-item>
    <nav-item>
      <nav-label>Mega Man X</nav-label>
    </nav-item>
    <nav-item>
      <nav-label>The Legend of Zelda</nav-label>
    </nav-item>
    <nav-item>
      <nav-label>Pac-Man</nav-label>
    </nav-item>
    <nav-item>
      <nav-label>Super Mario World</nav-label>
    </nav-item>
  </nav-list>
</template>

<script lang="ts">
  import { NavItem, NavLabel, NavList, NavListHeader } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavLabel, NavList, NavListHeader },
  });
</script>
```
