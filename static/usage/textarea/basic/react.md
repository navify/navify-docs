```tsx
import React from 'react';
import { NavItem, NavLabel, NavList, NavTextarea } from '@navify/react';
function Example() {
  return (
    <NavList>
      <NavItem>
        <NavLabel>Regular textarea</NavLabel>
        <NavTextarea placeholder="Type something here"></NavTextarea>
      </NavItem>
      <NavItem>
        <NavLabel>Readonly textarea</NavLabel>
        <NavTextarea readonly={true} placeholder="Can't edit this"></NavTextarea>
      </NavItem>
      <NavItem>
        <NavLabel>Disabled textarea</NavLabel>
        <NavTextarea disabled={true} placeholder="Can't type here"></NavTextarea>
      </NavItem>
    </NavList>
  );
}
export default Example;
```
