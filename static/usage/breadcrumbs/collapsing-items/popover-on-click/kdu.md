```html
<template>
  <nav-breadcrumbs :max-items="4" @navCollapsedClick="presentPopover($event)">
    <nav-breadcrumb href="#home">Home</nav-breadcrumb>
    <nav-breadcrumb href="#electronics">Electronics</nav-breadcrumb>
    <nav-breadcrumb href="#photography">Photography</nav-breadcrumb>
    <nav-breadcrumb href="#cameras">Cameras</nav-breadcrumb>
    <nav-breadcrumb href="#film">Film</nav-breadcrumb>
    <nav-breadcrumb href="#35mm">35 mm</nav-breadcrumb>
  </nav-breadcrumbs>
  <nav-popover :is-open="popoverOpen" :event="event" @didDismiss="popoverOpen = false">
    <nav-content>
      <nav-list>
        <nav-item
          k-for="(breadcrumb, i) in collapsedBreadcrumbs"
          :href="breadcrumb.href"
          :lines="i === collapsedBreadcrumbs.length - 1 ? 'none' : undefined"
        >
          <nav-label>{{ breadcrumb.textContent }}</nav-label>
        </nav-item>
      </nav-list>
    </nav-content>
  </nav-popover>
</template>

<script lang="ts">
import { NavBreadcrumb, NavBreadcrumbs, NavContent, NavItem, NavLabel, NavList, NavPopover } from '@navify/kdu';
import Popover from './Popover.kdu';

export default {
  components: { NavBreadcrumb, NavBreadcrumbs, NavContent, NavItem, NavLabel, NavList, NavPopover },
  data() {
    return {
      popoverOpen: false,
      collapsedBreadcrumbs: [],
      event: null
    }
  },
  methods: {
    presentPopover(e: Event) {
      this.collapsedBreadcrumbs = (e as CustomEvent).detail.collapsedBreadcrumbs;
      this.event = e;
      this.popoverOpen = true;
    }
  },
}
</script>
```