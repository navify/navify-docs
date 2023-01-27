```html
<template>
  <nav-img src="https://navify-docs-demo.web.app/assets/madison.jpg" alt="The Wisconsin State Capitol building in Madison, WI at night"></nav-img>
</template>

<script lang="ts">
  import { NavImg } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavImg },
  });
</script>
```
