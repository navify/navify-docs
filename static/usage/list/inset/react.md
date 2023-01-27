```tsx
import React from 'react';
import { NavItem, NavLabel, NavList } from '@navify/react';

function Example() {
  return (
    <NavList inset={true}>
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
