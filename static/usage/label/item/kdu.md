```html
<template>
  <nav-item>
    <nav-label>Default Label</nav-label>
  </nav-item>

  <nav-item>
    <nav-label>
      Multi-line text that should ellipsis when it is too long
      to fit on one line. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </nav-label>
  </nav-item>

  <nav-item>
    <nav-label class="nav-text-wrap">
      Multi-line text that should wrap when it is too long
      to fit on one line. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </nav-label>
  </nav-item>

  <nav-item>
    <nav-label>
      <h1>Heading</h1>
      <p>Paragraph</p>
    </nav-label>
  </nav-item>
</template>

<script lang="ts">
  import { NavItem, NavLabel } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavLabel },
  });
</script>
```
