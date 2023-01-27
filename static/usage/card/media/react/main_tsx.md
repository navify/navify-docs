```tsx
import React from 'react';
import { NavCard, NavCardContent, NavCardHeader, NavCardSubtitle, NavCardTitle } from '@navify/react';

import './main.css';

function Example() {
  return (
    <NavCard>
      <img alt="Silhouette of mountains" src="https://navifyframework.web.app/docs/img/demos/card-media.png" />
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
