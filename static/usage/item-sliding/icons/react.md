```tsx
import React from 'react';
import { NavIcon, NavItem, NavItemOption, NavItemOptions, NavItemSliding, NavLabel, NavList } from '@navify/react';
import { archive, heart, trash } from 'navicons/icons';

function Example() {
  return (
    <NavList>
      <NavItemSliding>
        <NavItemOptions side="start">
          <NavItemOption color="success">
            <NavIcon slot="icon-only" icon={archive}></NavIcon>
          </NavItemOption>
        </NavItemOptions>

        <NavItem>
          <NavLabel>Sliding Item with Icons Only</NavLabel>
        </NavItem>

        <NavItemOptions side="end">
          <NavItemOption>
            <NavIcon slot="icon-only" icon={heart}></NavIcon>
          </NavItemOption>
          <NavItemOption color="danger">
            <NavIcon slot="icon-only" icon={trash}></NavIcon>
          </NavItemOption>
        </NavItemOptions>
      </NavItemSliding>

      <NavItemSliding>
        <NavItemOptions side="start">
          <NavItemOption color="success">
            <NavIcon slot="start" icon={archive}></NavIcon>
            Archive
          </NavItemOption>
        </NavItemOptions>

        <NavItem>
          <NavLabel>
            Sliding Item with Start Icons
          </NavLabel>
        </NavItem>

        <NavItemOptions side="end">
          <NavItemOption>
            <NavIcon slot="start" icon={heart}></NavIcon>
            Favorite
          </NavItemOption>
          <NavItemOption color="danger">
            <NavIcon slot="start" icon={trash}></NavIcon>
            Delete
          </NavItemOption>
        </NavItemOptions>
      </NavItemSliding>

      <NavItemSliding>
        <NavItemOptions side="start">
          <NavItemOption color="success">
            <NavIcon slot="end" icon={archive}></NavIcon>
            Archive
          </NavItemOption>
        </NavItemOptions>

        <NavItem>
          <NavLabel>
            Sliding Item with End Icons
          </NavLabel>
        </NavItem>

        <NavItemOptions>
          <NavItemOption>
            <NavIcon slot="end" icon={heart}></NavIcon>
            Favorite
          </NavItemOption>
          <NavItemOption color="danger">
            <NavIcon slot="end" icon={trash}></NavIcon>
            Delete
          </NavItemOption>
        </NavItemOptions>
      </NavItemSliding>

      <NavItemSliding>
        <NavItemOptions side="start">
          <NavItemOption color="success">
            <NavIcon slot="top" icon={archive}></NavIcon>
            Archive
          </NavItemOption>
        </NavItemOptions>

        <NavItem>
          <NavLabel>
            Sliding Item with Top Icons
          </NavLabel>
        </NavItem>

        <NavItemOptions>
          <NavItemOption>
            <NavIcon slot="top" icon={heart}></NavIcon>
            Favorite
          </NavItemOption>
          <NavItemOption color="danger">
            <NavIcon slot="top" icon={trash}></NavIcon>
            Delete
          </NavItemOption>
        </NavItemOptions>
      </NavItemSliding>

      <NavItemSliding>
        <NavItemOptions side="start">
          <NavItemOption color="success">
            <NavIcon slot="bottom" icon={archive}></NavIcon>
            Archive
          </NavItemOption>
        </NavItemOptions>

        <NavItem>
          <NavLabel>
            Sliding Item with Bottom Icons
          </NavLabel>
        </NavItem>

        <NavItemOptions>
          <NavItemOption>
            <NavIcon slot="bottom" icon={heart}></NavIcon>
            Favorite
          </NavItemOption>
          <NavItemOption color="danger">
            <NavIcon slot="bottom" icon={trash}></NavIcon>
            Delete
          </NavItemOption>
        </NavItemOptions>
      </NavItemSliding>
    </NavList>
  );
}
export default Example;
```
