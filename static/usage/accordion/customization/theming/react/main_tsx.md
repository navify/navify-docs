```tsx
import React from 'react';
import { 
  NavAccordion, 
  NavAccordionGroup,
  NavItem, 
  NavLabel
} from '@navify/react';

import './main.css';

function Example() {
  return (
    <NavAccordionGroup expand="inset">
      <NavAccordion value="first">
        <NavItem slot="header" color="rose">
          <NavLabel>First Accordion</NavLabel>
        </NavItem>
        <div className="nav-padding" slot="content">
          First Content
        </div>
      </NavAccordion>
      <NavAccordion value="second">
        <NavItem slot="header" color="rose">
          <NavLabel>Second Accordion</NavLabel>
        </NavItem>
        <div className="nav-padding" slot="content">
          Second Content
        </div>
      </NavAccordion>
      <NavAccordion value="third">
        <NavItem slot="header" color="rose">
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
