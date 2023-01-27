```tsx
import React from 'react';
import { NavCard, NavCardContent, NavCardHeader, NavCardSubtitle, NavCardTitle } from '@navify/react';

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
    </NavCard>
  );
}
export default Example;
```
