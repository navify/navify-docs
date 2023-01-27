```html
<template>
  <nav-textarea
    placeholder="Enter text, leave the textarea, come back, and type to clear"
    :clear-on-edit="true"
  ></nav-textarea>
</template>

<script>
  import { NavTextarea } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavTextarea },
  });
</script>
```
