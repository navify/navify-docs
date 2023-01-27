```tsx
import React from 'react';
import { NavButton, NavModal, NavHeader, NavContent, NavToolbar, NavTitle, NavPage, NavLabel } from '@navify/react';

function Example() {
  return (
    <NavPage>
      <NavHeader>
        <NavToolbar>
          <NavTitle>App</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent className="nav-padding">
        <NavButton id="open-modal" expand="block">
          Open Sheet Modal
        </NavButton>
        <NavModal
          trigger="open-modal"
          initialBreakpoint={0.25}
          breakpoints={[0, 0.25, 0.5, 0.75]}
          handleBehavior="cycle"
        >
          <NavContent className="nav-padding">
            <div className="nav-margin-top">
              <NavLabel>Click the handle above to advance to the next breakpoint.</NavLabel>
            </div>
          </NavContent>
        </NavModal>
      </NavContent>
    </NavPage>
  );
}

export default Example;
```
