```html
<template>
  <nav-accordion-group>
    <nav-accordion value="first">
      <nav-item slot="header">
        <nav-label>First Accordion</nav-label>
      </nav-item>
      <div class="nav-padding" slot="content">
        First Content
      </div>
    </nav-accordion>
    <nav-accordion value="second">
      <nav-item slot="header">
        <nav-label>Second Accordion</nav-label>
      </nav-item>
      <div class="nav-padding" slot="content">
        Second Content
      </div>
    </nav-accordion>
    <nav-accordion value="third">
      <nav-item slot="header">
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

<style scoped>
  nav-accordion {
    margin: 0 auto;
  }

  nav-accordion.accordion-expanding,
  nav-accordion.accordion-expanded {
    width: calc(100% - 32px);
  
    margin: 16px auto;
  }
  
  nav-accordion.accordion-collapsing nav-item[slot="header"],
  nav-accordion.accordion-collapsed nav-item[slot="header"] {
    --background: var(--nav-color-light);
    --color: var(--nav-color-light-contrast);
  }
  
  nav-accordion.accordion-expanding nav-item[slot="header"],
  nav-accordion.accordion-expanded nav-item[slot="header"] {
    --background: var(--nav-color-primary);
    --color: var(--nav-color-primary-contrast);
  }
</style>
```
