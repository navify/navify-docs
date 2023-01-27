```html
<template>
  <nav-item>
    <nav-thumbnail slot="start">
      <img alt="Silhouette of mountains" src="https://navifyframework.web.app/docs/img/demos/thumbnail.svg" />
    </nav-thumbnail>
    <nav-label>Item Thumbnail</nav-label>
  </nav-item>
</template>

<script lang="ts">
  import { NavItem, NavLabel, NavThumbnail } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavLabel, NavThumbnail },
  });
</script>
```
