```html
<style>
  nav-textarea.custom-textarea {
    --background: #373737;
    --color: #fff;
    --padding-end: 10px;
    --padding-start: 10px;
    --placeholder-color: #ddd;
    --placeholder-opacity: 0.8;
  }
</style>

<template>
  <nav-textarea class="custom-textarea" placeholder="Type something here"></nav-textarea>
</template>

<script lang="ts">
  import { NavTextarea } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavTextarea },
  });
</script>
```
