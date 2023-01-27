```html
<template>
  <nav-accordion-group>
    <nav-accordion value="first">
      <nav-item slot="header" color="light">
        <nav-label>First Accordion</nav-label>
      </nav-item>
      <div class="nav-padding" slot="content">
        First Content
      </div>
    </nav-accordion>
    <nav-accordion value="second">
      <nav-item slot="header" color="light">
        <nav-label>Second Accordion</nav-label>
      </nav-item>
      <div class="nav-padding" slot="content">
        Second Content
      </div>
    </nav-accordion>
    <nav-accordion value="third">
      <nav-item slot="header" color="light">
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
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: {
      NavAccordion, 
      NavAccordionGroup,
      NavItem, 
      NavLabel
    },
  });
</script>
```
