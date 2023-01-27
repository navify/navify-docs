```tsx
import React from 'react';
import { NavCard, NavCardContent, NavCardHeader, NavCardSubtitle, NavCardTitle, NavItem, NavLabel, NavList, NavThumbnail } from '@navify/react';

import './main.css';

function Example() {
  return (
    <NavCard>
      <NavCardHeader>
        <NavCardTitle>Card Title</NavCardTitle>
        <NavCardSubtitle>Card Subtitle</NavCardSubtitle>
      </NavCardHeader>
      <NavCardContent>
        <NavList>
          <NavItem>
            <NavThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://navifyframework.web.app/docs/img/demos/thumbnail.svg" />
            </NavThumbnail>
            <NavLabel>Item</NavLabel>
          </NavItem>

          <NavItem>
            <NavThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://navifyframework.web.app/docs/img/demos/thumbnail.svg" />
            </NavThumbnail>
            <NavLabel>Item</NavLabel>
          </NavItem>

          <NavItem>
            <NavThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://navifyframework.web.app/docs/img/demos/thumbnail.svg" />
            </NavThumbnail>
            <NavLabel>Item</NavLabel>
          </NavItem>

          <NavItem lines="none">
            <NavThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://navifyframework.web.app/docs/img/demos/thumbnail.svg" />
            </NavThumbnail>
            <NavLabel>Item</NavLabel>
          </NavItem>
        </NavList>
      </NavCardContent>
    </NavCard>
  );
}
export default Example;
```
