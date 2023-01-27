```tsx
import React, { useRef, useEffect } from 'react';
import { NavAccordion, NavAccordionGroup, NavItem, NavLabel } from '@navify/react';
function Example() {
  const accordionGroup = useRef<null | HTMLNavAccordionGroupElement>(null);

  useEffect(() => {
    if (!accordionGroup.current) {
      return;
    }

    accordionGroup.current.value = ['first', 'third'];
  }, []);

  return (
    <NavAccordionGroup ref={accordionGroup} multiple={true}>
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
  );
}
export default Example;
```
