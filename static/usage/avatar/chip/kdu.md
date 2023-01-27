```html
<template>
  <nav-chip>
    <nav-avatar>
      <img alt="Silhouette of a person's head" src="https://navifyframework.web.app/docs/img/demos/avatar.svg" />
    </nav-avatar>
    <nav-label>Chip Avatar</nav-label>
  </nav-chip>
</template>

<script lang="ts">
  import { NavAvatar, NavChip, NavLabel } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavAvatar, NavChip, NavLabel }
  });
</script>
```
