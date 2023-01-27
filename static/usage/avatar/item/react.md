```tsx
import React from 'react';
import { NavAvatar, NavItem, NavLabel } from '@navify/react';
function Example() {
  return (
    <>
      <NavItem>
        <NavAvatar slot="start">
          <img alt="Silhouette of a person's head" src="https://navifyframework.web.app/docs/img/demos/avatar.svg" />
        </NavAvatar>
        <NavLabel>Item Avatar</NavLabel>
      </NavItem>
    </>
  );
}
export default Example;
```
