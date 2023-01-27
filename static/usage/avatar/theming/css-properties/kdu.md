```html
<template>
  <nav-avatar>
    <img alt="Silhouette of a person's head" src="https://navifyframework.web.app/docs/img/demos/avatar.svg" />
  </nav-avatar>
</template>

<script lang="ts">
  import { NavAvatar } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavAvatar }
  });
</script>

<style scoped>
  nav-avatar {
    --border-radius: 4px;
  }
</style>
```
