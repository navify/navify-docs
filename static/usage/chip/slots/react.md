```tsx
import React from 'react';
import { NavChip, NavAvatar, NavLabel, NavIcon } from '@navify/react';
import { close, closeCircle, pin } from 'navicons/icons';

function Example() {
  return (
    <>
      <NavChip>
        <NavAvatar>
          <img alt="Silhouette of a person's head" src="https://navifyframework.web.app/docs/img/demos/avatar.svg" />
        </NavAvatar>
        <NavLabel>Avatar Chip</NavLabel>
        <NavIcon icon={closeCircle}></NavIcon>
      </NavChip>

      <NavChip>
        <NavIcon icon={pin} color="primary"></NavIcon>
        <NavLabel>Icon Chip</NavLabel>
        <NavIcon icon={close}></NavIcon>
      </NavChip>
    </>
  );
}
export default Example;
```
