```tsx
import React from 'react';
import { 
  NavButtons,
  NavContent,
  NavHeader,
  NavMenu,
  NavMenuButton,
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
        <NavContent className="nav-padding">This is the menu content.</NavContent>
      </NavMenu>
      <NavPage id="main-content">
        <NavHeader>
          <NavToolbar>
            <NavButtons slot="start">
              <NavMenuButton></NavMenuButton>
            </NavButtons>
            <NavTitle>Menu</NavTitle>
          </NavToolbar>
        </NavHeader>
        <NavContent className="nav-padding">
          Tap the button in the toolbar to open the menu.
        </NavContent>
      </NavPage>
    </>
  );
}
export default Example;
```
