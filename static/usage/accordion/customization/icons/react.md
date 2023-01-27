```tsx
import React from 'react';
import { 
  NavAccordion, 
  NavAccordionGroup,
  NavItem, 
  NavLabel
} from '@navify/react';
import { caretDownCircle } from 'navicons/icons';

function Example() {
  return (
    <NavAccordionGroup>
      <NavAccordion value="first" toggleIcon={caretDownCircle} toggleIconSlot="start">
        <NavItem slot="header" color="light">
          <NavLabel>First Accordion</NavLabel>
        </NavItem>
        <div className="nav-padding" slot="content">
          First Content
        </div>
      </NavAccordion>
      <NavAccordion value="second" toggleIcon={caretDownCircle} toggleIconSlot="start">
        <NavItem slot="header" color="light">
          <NavLabel>Second Accordion</NavLabel>
        </NavItem>
        <div className="nav-padding" slot="content">
          Second Content
        </div>
      </NavAccordion>
      <NavAccordion value="third" toggleIcon={caretDownCircle} toggleIconSlot="start">
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
