```html
<template>
  <nav-chip>
    <nav-avatar>
      <img alt="Silhouette of a person's head" src="https://navifyframework.web.app/docs/img/demos/avatar.svg" />
    </nav-avatar>
    <nav-label>Avatar Chip</nav-label>
    <nav-icon :icon="closeCircle"></nav-icon>
  </nav-chip>

  <nav-chip>
    <nav-icon :icon="pin" color="primary"></nav-icon>
    <nav-label>Icon Chip</nav-label>
    <nav-icon :icon="close"></nav-icon>
  </nav-chip>
</template>

<script lang="ts">
  import { NavChip, NavAvatar, NavLabel, NavIcon } from '@navify/kdu';
  import { close, closeCircle, pin } from 'navicons/icons';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavChip, NavAvatar, NavLabel, NavIcon },
    setup() {
      return {
        close,
        closeCircle,
        pin,
      };
    },
  });
</script>
```
