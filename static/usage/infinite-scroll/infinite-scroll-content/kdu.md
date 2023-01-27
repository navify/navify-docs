```html
<template>
  <nav-content>
    <nav-list>
      <nav-item k-for="(item, index) in items">
        <nav-avatar slot="start">
          <img :src="'https://picsum.photos/80/80?random=' + index" alt="avatar" />
        </nav-avatar>
        <nav-label>{{ item }}</nav-label>
      </nav-item>
    </nav-list>
    <nav-infinite-scroll>
      <nav-infinite-scroll-content
        loading-text="Please wait..."
        loading-spinner="bubbles"
      ></nav-infinite-scroll-content>
    </nav-infinite-scroll>
  </nav-content>
</template>

<script lang="ts">
  import {
    NavContent,
    NavInfiniteScroll,
    NavInfiniteScrollContent,
    NavList,
    NavItem,
    NavAvatar,
    NavImg,
    NavLabel,
    NavInfiniteCustomEvent,
  } from '@navify/kdu';
  import { defineComponent, reactive } from 'kdu';

  export default defineComponent({
    components: {
      NavContent,
      NavContent,
      NavInfiniteScroll,
      NavInfiniteScrollContent,
      NavList,
      NavItem,
      NavAvatar,
      NavImg,
      NavLabel,
    },
    setup() {
      const items = reactive([]);

      for (let i = 1; i < 51; i++) {
        items.push(`Item ${i}`);
      }

      return { items };
    },
  });
</script>
```
