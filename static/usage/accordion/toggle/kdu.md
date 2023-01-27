```html
<template>
  <nav-accordion-group ref="accordionGroup">
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

  <nav-button @click="toggleAccordion()">Toggle Second Accordion</nav-button>
</template>

<script lang="ts">
  import { NavAccordion, NavAccordionGroup, NavButton, NavItem, NavLabel } from '@navify/kdu';
  import { defineComponent, ref } from 'kdu';

  export default defineComponent({
    components: {
      NavAccordion,
      NavAccordionGroup,
      NavButton,
      NavItem,
      NavLabel,
    },
    setup() {
      const accordionGroup = ref(null);
      const toggleAccordion = () => {
        if (!accordionGroup.value) {
          return;
        }
        const nativeEl = accordionGroup.value.$el;

        if (nativeEl.value === 'second') {
          nativeEl.value = undefined;
        } else {
          nativeEl.value = 'second';
        }
      };

      return { accordionGroup, toggleAccordion };
    },
  });
</script>
```
