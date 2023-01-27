```tsx
import React from 'react';
import { NavContent, NavHeader, NavMenu, NavSplitPane, NavTitle, NavToolbar } from '@navify/react';

function Example() {
  return (
    <NavSplitPane when="xs" contentId="main">
      <NavMenu contentId="main">
        <NavHeader>
          <NavToolbar color="tertiary">
            <NavTitle>Menu</NavTitle>
          </NavToolbar>
        </NavHeader>
        <NavContent className="nav-padding">
          Menu Content
        </NavContent>
      </NavMenu>
    
      <div className="nav-page" id="main">
        <NavHeader>
          <NavToolbar>
            <NavTitle>Main View</NavTitle>
          </NavToolbar>
        </NavHeader>
        <NavContent className="nav-padding">
          Main View Content
        </NavContent>
      </div>
    </NavSplitPane>
  );
}
export default Example;
```
