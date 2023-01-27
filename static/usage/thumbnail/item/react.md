```tsx
import React from 'react';
import { NavItem, NavLabel, NavThumbnail } from '@navify/react';

function Example() {
  return (
    <>
      <NavItem>
        <NavThumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://navifyframework.web.app/docs/img/demos/thumbnail.svg" />
        </NavThumbnail>
        <NavLabel>Item Thumbnail</NavLabel>
      </NavItem>
    </>
  );
}
export default Example;
```
