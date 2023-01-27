```html
<style>
  nav-thumbnail {
    --size: 140px;
    --border-radius: 14px;
  }
</style>

<template>
  <nav-thumbnail>
    <img alt="Silhouette of mountains" src="https://navifyframework.web.app/docs/img/demos/thumbnail.svg" />
  </nav-thumbnail>
</template>

<script lang="ts">
  import { NavThumbnail } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavThumbnail },
  });
</script>
```
