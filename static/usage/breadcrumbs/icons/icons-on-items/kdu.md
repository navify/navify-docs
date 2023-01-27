```html
<template>
  <nav-label>Icons at Start</nav-label>
  <nav-breadcrumbs>
    <nav-breadcrumb href="#home">
      <nav-icon slot="start" :icon="home"></nav-icon>
      Home
    </nav-breadcrumb>
    <nav-breadcrumb href="#electronics">
      <nav-icon slot="start" :icon="flash"></nav-icon>
      Electronics
    </nav-breadcrumb>
    <nav-breadcrumb href="#cameras">
      <nav-icon slot="start" :icon="camera"></nav-icon>
      Cameras
    </nav-breadcrumb>
    <nav-breadcrumb href="#film">
      <nav-icon slot="start" :icon="film"></nav-icon>
      Film
    </nav-breadcrumb>
  </nav-breadcrumbs>

  <nav-label class="nav-margin-top">Icons at End</nav-label>
  <nav-breadcrumbs>
    <nav-breadcrumb href="#home">
      Home
      <nav-icon slot="end" :icon="home"></nav-icon>
    </nav-breadcrumb>
    <nav-breadcrumb href="#electronics">
      Electronics
      <nav-icon slot="end" :icon="flash"></nav-icon>
    </nav-breadcrumb>
    <nav-breadcrumb href="#cameras">
      Cameras
      <nav-icon slot="end" :icon="camera"></nav-icon>
    </nav-breadcrumb>
    <nav-breadcrumb href="#film">
      Film
      <nav-icon slot="end" :icon="film"></nav-icon>
    </nav-breadcrumb>
  </nav-breadcrumbs>
</template>

<script lang="ts">
  import { NavBreadcrumb, NavBreadcrumbs, NavIcon, NavLabel } from '@navify/kdu';
  import { defineComponent } from 'kdu';
  import { camera, film, flash, home } from 'navicons/icons';

  export default defineComponent({
    components: { NavBreadcrumb, NavBreadcrumbs, NavIcon, NavLabel },
    setup() {
      return { camera, film, flash, home };
    },
  });
</script>
```
