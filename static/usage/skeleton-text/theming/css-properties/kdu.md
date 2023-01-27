```html
<template>  
  <nav-list>
    <nav-list-header>
      <nav-skeleton-text :animated="true" style="width: 80px"></nav-skeleton-text>
    </nav-list-header>
    <nav-item>
      <nav-thumbnail slot="start">
        <nav-skeleton-text :animated="true"></nav-skeleton-text>
      </nav-thumbnail>
      <nav-label>
        <h3>
          <nav-skeleton-text :animated="true" style="width: 80%;"></nav-skeleton-text>
        </h3>
        <p>
          <nav-skeleton-text :animated="true" style="width: 60%;"></nav-skeleton-text>
        </p>
        <p>
          <nav-skeleton-text :animated="true" style="width: 30%;"></nav-skeleton-text>
        </p>
      </nav-label>
    </nav-item>
  </nav-list>
</template>

<script lang="ts">
  import {
    NavItem,
    NavLabel,
    NavList,
    NavListHeader,
    NavSkeletonText,
    NavThumbnail,
  } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: {
      NavItem,
      NavLabel,
      NavList,
      NavListHeader,
      NavSkeletonText,
      NavThumbnail,
    }
  });
</script>

<style scoped>
  nav-skeleton-text {
    --border-radius: 9999px;
    --background: rgba(188, 0, 255, 0.065);
    --background-rgb: 188, 0, 255;
  }
</style>
```
