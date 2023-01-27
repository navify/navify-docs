```tsx
import React, { useState } from 'react';
import { NavButtons, NavButton, NavModal, NavHeader, NavContent, NavToolbar, NavTitle, NavPage } from '@navify/react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavPage>
      <NavHeader>
        <NavToolbar>
          <NavTitle>Inline Modal</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent className="nav-padding">
        <NavButton expand="block" onClick={() => setIsOpen(true)}>
          Open
        </NavButton>
        <NavModal isOpen={isOpen}>
          <NavHeader>
            <NavToolbar>
              <NavTitle>Modal</NavTitle>
              <NavButtons slot="end">
                <NavButton onClick={() => setIsOpen(false)}>Close</NavButton>
              </NavButtons>
            </NavToolbar>
          </NavHeader>
          <NavContent className="nav-padding">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
              reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui.
              Eaque, dicta.
            </p>
          </NavContent>
        </NavModal>
      </NavContent>
    </NavPage>
  );
}

export default Example;
```
