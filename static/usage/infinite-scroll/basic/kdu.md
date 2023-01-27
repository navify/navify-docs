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
    <nav-infinite-scroll @navInfinite="navInfinite">
      <nav-infinite-scroll-content></nav-infinite-scroll-content>
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

      const generateItems = () => {
        const count = items.length + 1;
        for (let i = 0; i < 50; i++) {
          items.push(`Item ${count + i}`);
        }
      };

      const navInfinite = (ev: NavInfiniteCustomEvent) => {
        generateItems();
        setTimeout(() => ev.target.complete(), 500);
      };

      generateItems();

      return { navInfinite, items };
    },
  });
</script>
```
