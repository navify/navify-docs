```html
<template>
  <nav-list>
    <nav-item>
      <nav-label>Regular textarea</nav-label>
      <nav-textarea placeholder="Type something here"></nav-textarea>
    </nav-item>
    <nav-item>
      <nav-label>Readonly textarea</nav-label>
      <nav-textarea :readonly="true" placeholder="Can't edit this"></nav-textarea>
    </nav-item>
    <nav-item>
      <nav-label>Disabled textarea</nav-label>
      <nav-textarea :disabled="true" placeholder="Can't type here"></nav-textarea>
    </nav-item>
  </nav-list>
</template>

<script>
  import { NavItem, NavLabel, NavList, NavTextarea } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavLabel, NavList, NavTextarea },
  });
</script>
```
