```tsx
import React from 'react';
import { NavAvatar, NavItem, NavLabel, NavThumbnail } from '@navify/react';

function Example() {
  return (
    <>
      <NavItem>
        <NavAvatar slot="start">
          <img alt="Silhouette of a person's head" src="https://navifyframework.web.app/docs/img/demos/avatar.svg" />
        </NavAvatar>
        <NavLabel>
          Avatar Item
        </NavLabel>
      </NavItem>

      <NavItem>
        <NavThumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://navifyframework.web.app/docs/img/demos/thumbnail.svg" />
        </NavThumbnail>
        <NavLabel>
          Thumbnail Item
        </NavLabel>
      </NavItem>
    </>
  );
}
export default Example;
```
