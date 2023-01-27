```html
<template>
  <nav-header>
    <nav-toolbar>
      <nav-title>Pull to Refresh</nav-title>
    </nav-toolbar>
  </nav-header>

  <nav-content :scroll-y="false">
    <nav-refresher slot="fixed" @navRefresh="handleRefresh($event)">
      <nav-refresher-content></nav-refresher-content>
    </nav-refresher>

    <div class="nav-content-scroll-host nav-padding">
      <p>Pull this content down to trigger the refresh.</p>
    </div>
  </nav-content>
</template>

<script lang="ts">
  import { NavContent, NavHeader, NavRefresher, NavRefresherContent, NavTitle, NavToolbar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavContent, NavHeader, NavRefresher, NavRefresherContent, NavTitle, NavToolbar },
    setup() {
      const handleRefresh = (event: CustomEvent) => {
        setTimeout(() => {
          // Any calls to load data go here
          event.target.complete();
        }, 2000);
      };

      return { handleRefresh };
    },
  });
</script>

<style scoped>
  .nav-content-scroll-host {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
</style>
```
