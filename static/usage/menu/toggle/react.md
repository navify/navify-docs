```tsx
import React from 'react';
import { 
  NavButton,
  NavContent,
  NavHeader,
  NavMenu,
  NavMenuToggle,
  NavPage,
  NavTitle,
  NavToolbar
} from '@navify/react';
function Example() {
  return (
    <>
      <NavMenu contentId="main-content">
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
