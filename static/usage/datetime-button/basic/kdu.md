```html
<template>
  <nav-datetime-button datetime="datetime"></nav-datetime-button>
  
  <nav-modal :keep-contents-mounted="true">
    <nav-datetime id="datetime"></nav-datetime>
  </nav-modal>
</template>

<script lang="ts">
  import { NavDatetime, NavDatetimeButton, NavModal } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavDatetime, NavDatetimeButton, NavModal },
  });
</script>
```
