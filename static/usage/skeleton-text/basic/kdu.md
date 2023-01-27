```html
<template>
  <nav-list k-if="loaded">
    <nav-list-header>Albums</nav-list-header>
    <nav-item>
      <nav-thumbnail slot="start">
        <nav-icon style="width: 100%; height: 100%" :icon="musicalNotes"></nav-icon>
      </nav-thumbnail>
      <nav-label>
        <h3>Abbey Road</h3>
        <p>The Beatles</p>
        <p>1969</p>
      </nav-label>
    </nav-item>
  </nav-list>
  
  <nav-list k-if="!loaded">
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
  
  <nav-button @click="setLoaded(!loaded)">Toggle</nav-button>
</template>

<script lang="ts">
  import {
    NavButton,
    NavIcon,
    NavItem,
    NavLabel,
    NavList,
    NavListHeader,
    NavSkeletonText,
    NavThumbnail,
  } from '@navify/kdu';
  import { musicalNotes } from 'navicons/icons'
  import { defineComponent, ref } from 'kdu';

  export default defineComponent({
    components: {
      NavButton,
      NavIcon,
      NavItem,
      NavLabel,
      NavList,
      NavListHeader,
      NavSkeletonText,
      NavThumbnail,
    },
    setup() {
      const loaded = ref(false);
      const setLoaded = (state: boolean) => loaded.value = state;
      return {
        loaded,
        musicalNotes,
        setLoaded
      }
    }
  });
</script>
```
