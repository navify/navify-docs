```html
<template>
  <nav-content class="nav-padding">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>

    <p>Here's a small text description for the content. Nothing more, nothing less.</p>
  </nav-content>
</template>

<script lang="ts">
  import { NavContent } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavContent },
  });
</script>

<style scoped>
  nav-content::part(background) {
    background: #d31373;
  }

  nav-content::part(scroll) {
    color: #fff;
  }
</style>
```
