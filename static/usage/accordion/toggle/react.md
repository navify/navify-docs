```tsx
import React, { useRef } from 'react';
import { NavAccordion, NavAccordionGroup, NavButton, NavItem, NavLabel } from '@navify/react';
function Example() {
  const accordionGroup = useRef<null | HTMLNavAccordionGroupElement>(null);
  const toggleAccordion = () => {
    if (!accordionGroup.current) {
      return;
    }
    const nativeEl = accordionGroup.current;

    if (nativeEl.value === 'second') {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = 'second';
    }
  };
  return (
    <>
      <NavAccordionGroup ref={accordionGroup}>
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
      <NavButton onClick={toggleAccordion}>Toggle Second Accordion</NavButton>
    </>
  );
}
export default Example;
```
