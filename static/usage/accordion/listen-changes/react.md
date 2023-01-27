```tsx
import React, { useRef } from 'react';
import { NavAccordion, NavAccordionGroup, NavItem, NavLabel, AccordionGroupCustomEvent } from '@navify/react';
function Example() {
  const listenerOut = useRef<null | HTMLParagraphElement>(null);
  const values = ['first', 'second', 'third'];
  const accordionGroupChange = (ev: AccordionGroupCustomEvent) => {
    const nativeEl = listenerOut.current;
    if (!nativeEl) {
      return;
    }

    const collapsedItems = values.filter((value) => value !== ev.detail.value);
    const selectedValue = ev.detail.value;

    nativeEl.innerText = `
      Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value}
      Collapsed: ${collapsedItems.join(', ')}
    `;
  };

  return (
    <>
      <NavAccordionGroup onNavChange={accordionGroupChange}>
        <NavAccordion value="first">
          <NavItem slot="header" color="light">
            <NavLabel>First Accordion</NavLabel>
          </NavItem>
          <div className="nav-padding" slot="content">
            First Content
          </div>
        </NavAccordion>
        <NavAccordion value="second">
          <NavItem slot="header" color="light">
            <NavLabel>Second Accordion</NavLabel>
          </NavItem>
          <div className="nav-padding" slot="content">
            Second Content
          </div>
        </NavAccordion>
        <NavAccordion value="third">
          <NavItem slot="header" color="light">
            <NavLabel>Third Accordion</NavLabel>
          </NavItem>
          <div className="nav-padding" slot="content">
            Third Content
          </div>
        </NavAccordion>
      </NavAccordionGroup>
      <p ref={listenerOut}></p>
    </>
  );
}
export default Example;
```
