```tsx
import React from 'react';
import { NavItem, NavItemDivider, NavItemGroup, NavItemOption, NavItemOptions, NavItemSliding, NavLabel } from '@navify/react';

function Example() {
  return (
    <>
      <NavItemGroup>
        <NavItemDivider>
          <NavLabel>
            Fruits
          </NavLabel>
        </NavItemDivider>

        <NavItemSliding>
          <NavItem>
            <NavLabel>
              Grapes
            </NavLabel>
          </NavItem>
          <NavItemOptions>
            <NavItemOption>
              Favorite
            </NavItemOption>
          </NavItemOptions>
        </NavItemSliding>

        <NavItemSliding>
          <NavItem>
            <NavLabel>
              Apples
            </NavLabel>
          </NavItem>
          <NavItemOptions>
            <NavItemOption>
              Favorite
            </NavItemOption>
          </NavItemOptions>
        </NavItemSliding>

        <NavItemSliding>
          <NavItem lines="none">
            <NavLabel>
              Bananas
            </NavLabel>
          </NavItem>
          <NavItemOptions>
            <NavItemOption>
              Favorite
            </NavItemOption>
          </NavItemOptions>
        </NavItemSliding>
      </NavItemGroup>

      <NavItemGroup>
        <NavItemDivider>
          <NavLabel>
            Vegetables
          </NavLabel>
        </NavItemDivider>

        <NavItemSliding>
          <NavItem>
            <NavLabel>
              Carrots
            </NavLabel>
          </NavItem>
          <NavItemOptions>
            <NavItemOption>
              Favorite
            </NavItemOption>
          </NavItemOptions>
        </NavItemSliding>

        <NavItemSliding>
          <NavItem>
            <NavLabel>
              Broccoli
            </NavLabel>
          </NavItem>
          <NavItemOptions>
            <NavItemOption>
              Favorite
            </NavItemOption>
          </NavItemOptions>
        </NavItemSliding>

        <NavItemSliding>
          <NavItem lines="none">
            <NavLabel>
              Celery
            </NavLabel>
          </NavItem>
          <NavItemOptions>
            <NavItemOption>
              Favorite
            </NavItemOption>
          </NavItemOptions>
        </NavItemSliding>
      </NavItemGroup>
    </>
  );
}
export default Example;
```
