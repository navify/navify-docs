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
  </nav-card>
</template>

<script lang="ts">
  import { NavCard, NavCardContent, NavCardHeader, NavCardSubtitle, NavCardTitle } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavCard, NavCardContent, NavCardHeader, NavCardSubtitle, NavCardTitle },
  });
</script>

<style scoped>
  nav-card {
    --background: #000;
    --color: #9efff0;
  }

  nav-card-title {
    --color: #52ffe4;
  }

  nav-card-subtitle {
    --color: #d1fff8;
  }

  /* iOS places the subtitle above the title */
  nav-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>
```
