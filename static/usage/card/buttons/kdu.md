```html
<template>
  <nav-card>
    <nav-card-header>
      <nav-card-title>Card Title</nav-card-title>
      <nav-card-subtitle>Card Subtitle</nav-card-subtitle>
    </nav-card-header>

    <nav-card-content>
      Here's a small text description for the card content. Nothing more, nothing less.
    </nav-card-content>

    <nav-button fill="clear">Action 1</nav-button>
    <nav-button fill="clear">Action 2</nav-button>
  </nav-card>
</template>

<script lang="ts">
  import { NavButton, NavCard, NavCardContent, NavCardHeader, NavCardSubtitle, NavCardTitle } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton, NavCard, NavCardContent, NavCardHeader, NavCardSubtitle, NavCardTitle },
  });
</script>

<style scoped>
  /* iOS places the subtitle above the title */
  nav-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>
```
