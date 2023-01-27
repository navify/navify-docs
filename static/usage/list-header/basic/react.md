```tsx
import React from 'react';
import { NavItem, NavLabel, NavList, NavListHeader } from '@navify/react';

function Example() {
  return (
    <NavList>
      <NavListHeader>
        <NavLabel>Video Games</NavLabel>
      </NavListHeader>
      <NavItem>
        <NavLabel>Pokémon Yellow</NavLabel>
      </NavItem>
      <NavItem>
        <NavLabel>Mega Man X</NavLabel>
      </NavItem>
      <NavItem>
        <NavLabel>The Legend of Zelda</NavLabel>
      </NavItem>
      <NavItem>
        <NavLabel>Pac-Man</NavLabel>
      </NavItem>
      <NavItem>
        <NavLabel>Super Mario World</NavLabel>
      </NavItem>
    </NavList>
  );
}
export default Example;
```
