```tsx
import React, { useRef } from 'react';
import {
  NavNav,
  NavPage,
  NavHeader,
  NavToolbar,
  NavTitle,
  NavButton,
  NavButtons,
  NavContent,
  NavModal,
} from '@navify/react';

import PageOne from './page-one';

function Example() {
  const nav = useRef<HTMLNavNavElement>(null);
  const modal = useRef<HTMLNavModalElement>(null);

  const didPresent = () => {
    if (nav.current) {
      nav.current.setRoot(PageOne, { nav: nav.current });
    }
  };

  const dismiss = () => {
    if (modal.current) {
      modal.current.dismiss();
    }
  };

  return (
    <NavPage>
      <NavHeader>
        <NavToolbar>
          <NavTitle>Modal Navigation</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent className="nav-padding">
        <NavButton id="openModal">Open Modal</NavButton>
        <NavModal ref={modal} trigger="openModal" onDidPresent={didPresent}>
          <NavHeader>
            <NavToolbar>
              <NavTitle>Modal</NavTitle>
              <NavButtons slot="end">
                <NavButton onClick={dismiss}>Close</NavButton>
              </NavButtons>
            </NavToolbar>
          </NavHeader>
          <NavContent>
            <NavNav ref={nav}></NavNav>
          </NavContent>
        </NavModal>
      </NavContent>
    </NavPage>
  );
}
export default Example;
```
