```html
<template>
  <nav-accordion-group expand="inset">
    <nav-accordion value="first">
      <nav-item slot="header" color="rose">
        <nav-label>First Accordion</nav-label>
      </nav-item>
      <div class="nav-padding" slot="content">
        First Content
      </div>
    </nav-accordion>
    <nav-accordion value="second">
      <nav-item slot="header" color="rose">
        <nav-label>Second Accordion</nav-label>
      </nav-item>
      <div class="nav-padding" slot="content">
        Second Content
      </div>
    </nav-accordion>
    <nav-accordion value="third">
      <nav-item slot="header" color="rose">
        <nav-label>Third Accordion</nav-label>
      </nav-item>
      <div class="nav-padding" slot="content">
        Third Content
      </div>
    </nav-accordion>
  </nav-accordion-group>
</template>

<script lang="ts">
  import {
    NavAccordion, 
    NavAccordionGroup,
    NavItem, 
    NavLabel
  } from '@navify/kdu';
  import { caretDownCircle } from 'navicons/icons';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: {
      NavAccordion, 
      NavAccordionGroup,
      NavItem, 
      NavLabel
    },
    setup() {
      return { caretDownCircle }
    }
  });
</script>

<style>
  :root {
    --nav-color-rose: #fecdd3;
    --nav-color-rose-rgb: 254,205,211;
    --nav-color-rose-contrast: #000000;
    --nav-color-rose-contrast-rgb: 0,0,0;
    --nav-color-rose-shade: #e0b4ba;
    --nav-color-rose-tint: #fed2d7;
  }
  
  .nav-color-rose {
    --nav-color-base: var(--nav-color-rose);
    --nav-color-base-rgb: var(--nav-color-rose-rgb);
    --nav-color-contrast: var(--nav-color-rose-contrast);
    --nav-color-contrast-rgb: var(--nav-color-rose-contrast-rgb);
    --nav-color-shade: var(--nav-color-rose-shade);
    --nav-color-tint: var(--nav-color-rose-tint);
  }
  
  div[slot="content"] {
    background: rgba(var(--nav-color-rose-rgb), 0.25)
  }
</style>
```
