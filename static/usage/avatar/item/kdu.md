```html
<template>
  <nav-item>
    <nav-avatar slot="start">
      <img alt="Silhouette of a person's head" src="https://navifyframework.web.app/docs/img/demos/avatar.svg" />
    </nav-avatar>
    <nav-label>Item Avatar</nav-label>
  </nav-item>
</template>

<script lang="ts">
  import { NavAvatar, NavItem, NavLabel } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavAvatar, NavItem, NavLabel }
  });
</script>
```
