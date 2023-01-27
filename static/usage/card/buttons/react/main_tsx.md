```tsx
import React from 'react';
import { NavButton, NavCard, NavCardContent, NavCardHeader, NavCardSubtitle, NavCardTitle } from '@navify/react';

import './main.css';

function Example() {
  return (
    <NavCard>
      <NavCardHeader>
        <NavCardTitle>Card Title</NavCardTitle>
        <NavCardSubtitle>Card Subtitle</NavCardSubtitle>
      </NavCardHeader>

      <NavCardContent>
        Here's a small text description for the card content. Nothing more, nothing less.
      </NavCardContent>

      <NavButton fill="clear">Action 1</NavButton>
      <NavButton fill="clear">Action 2</NavButton>
    </NavCard>
  );
}
export default Example;
```
