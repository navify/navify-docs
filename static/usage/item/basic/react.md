```tsx
import React from 'react';
import { NavItem, NavLabel } from '@navify/react';

function Example() {
  return (
    <>
      <NavItem>
        <NavLabel>Basic Item</NavLabel>
      </NavItem>

      <NavItem>
        <NavLabel>
          Multi-line text that should ellipsis when it is too long
          to fit on one line. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </NavLabel>
      </NavItem>

      <NavItem>
        <NavLabel class="nav-text-wrap">
          Multi-line text that should wrap when it is too long
          to fit on one line. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </NavLabel>
      </NavItem>

      <NavItem>
        <NavLabel>
          <h1>H1 Heading</h1>
          <p>Paragraph</p>
        </NavLabel>
      </NavItem>

      <NavItem>
        <NavLabel>
          <h2>H2 Heading</h2>
          <p>Paragraph</p>
        </NavLabel>
      </NavItem>

      <NavItem>
        <NavLabel>
          <h3>H3 Heading</h3>
          <p>Paragraph</p>
        </NavLabel>
      </NavItem>
    </>
  );
}
export default Example;
```
