```tsx
import React, { useState } from 'react';
import { 
  NavButton,
  NavContent,
  NavHeader,
  NavItem,
  NavLabel,
  NavMenu,
  NavMenuToggle,
  NavPage,
  NavRadio,
  NavRadioGroup,
  NavTitle,
  NavToolbar
} from '@navify/react';
import type { RadioGroupCustomEvent } from '@navify/react';

function Example() {
  const [menuType, setMenuType] = useState('overlay');

  return (
    <>
      <NavMenu type={menuType} contentId="main-content">
        <NavHeader>
          <NavToolbar>
            <NavTitle>Menu Content</NavTitle>
          </NavToolbar>
        </NavHeader>
        <NavContent className="nav-padding">
          <NavMenuToggle>
            <NavButton>Click to close the menu</NavButton>
          </NavMenuToggle>  
        </NavContent>
      </NavMenu>
      <NavPage id="main-content">
        <NavHeader>
          <NavToolbar>
            <NavTitle>Menu</NavTitle>
          </NavToolbar>
        </NavHeader>
        <NavContent className="nav-padding">
          <h2>Select an overlay type:</h2>
          <NavRadioGroup
            value={menuType}
            onNavChange={(ev: RadioGroupCustomEvent) => {
              setMenuType(ev.detail.value);
            }}
          >
            <NavItem>
              <NavLabel>
                <code>overlay</code>
              </NavLabel>
              <NavRadio value="overlay"></NavRadio>
            </NavItem>
            <NavItem>
              <NavLabel>
                <code>reveal</code>
              </NavLabel>
              <NavRadio value="reveal"></NavRadio>
            </NavItem>
            <NavItem>
              <NavLabel>
                <code>push</code>
              </NavLabel>
              <NavRadio value="push"></NavRadio>
            </NavItem>
          </NavRadioGroup> <br />
          <NavMenuToggle>
            <NavButton>Click to open the menu</NavButton>
          </NavMenuToggle>
        </NavContent>
      </NavPage>
    </>
  );
}
export default Example;
```
