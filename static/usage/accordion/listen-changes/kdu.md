```html
<template>
  <nav-accordion-group @navChange="accordionGroupChange($event)">
    <nav-accordion value="first">
      <nav-item slot="header" color="light">
        <nav-label>First Accordion</nav-label>
      </nav-item>
      <div class="nav-padding" slot="content">First Content</div>
    </nav-accordion>
    <nav-accordion value="second">
      <nav-item slot="header" color="light">
        <nav-label>Second Accordion</nav-label>
      </nav-item>
      <div class="nav-padding" slot="content">Second Content</div>
    </nav-accordion>
    <nav-accordion value="third">
      <nav-item slot="header" color="light">
        <nav-label>Third Accordion</nav-label>
      </nav-item>
      <div class="nav-padding" slot="content">Third Content</div>
    </nav-accordion>
  </nav-accordion-group>

  <p ref="listenerOut"></p>
</template>

<script lang="ts">
  import { NavAccordion, NavAccordionGroup, NavItem, NavLabel, AccordionGroupCustomEvent } from '@navify/kdu';
  import { defineComponent, ref } from 'kdu';

  export default defineComponent({
    components: {
      NavAccordion,
      NavAccordionGroup,
      NavItem,
      NavLabel,
    },
    setup() {
      const listenerOut = ref(null);
      const values = ['first', 'second', 'third'];
      const accordionGroupChange = (ev: AccordionGroupCustomEvent) => {
        if (!listenerOut.value) {
          return;
        }

        const collapsedItems = values.filter((value) => value !== ev.detail.value);
        const selectedValue = ev.detail.value;

        listenerOut.value.innerText = `
          Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value}
          Collapsed: ${collapsedItems.join(', ')}
        `;
      };
      return { listenerOut, accordionGroupChange };
    },
  });
</script>
```
