```html
<template>
  <nav-button id="popover-button">Open Menu</nav-button>
  <nav-popover trigger="popover-button" :dismiss-on-select="true">
    <nav-content>
      <nav-list>
        <nav-item :button="true" :detail="false">Option 1</nav-item>
        <nav-item :button="true" :detail="false">Option 2</nav-item>
        <nav-item :button="true" id="nested-trigger">More options...</nav-item>

        <nav-popover trigger="nested-trigger" :dismiss-on-select="true" side="end">
          <nav-content>
            <nav-list>
              <nav-item :button="true" :detail="false">Nested option</nav-item>
            </nav-list>
          </nav-content>
        </nav-popover>
      </nav-list>
    </nav-content>
  </nav-popover>
</template>

<script lang="ts">
  import { NavButton, NavItem, NavList, NavPopover } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton, NavItem, NavList, NavPopover },
  });
</script>
```
