```tsx
import React, { useRef } from 'react';
import {
  NavButtons,
  NavButton,
  NavModal,
  NavHeader,
  NavContent,
  NavToolbar,
  NavTitle,
  NavPage,
  NavList,
  NavItem,
  NavLabel,
  NavAvatar,
  NavImg,
} from '@navify/react';

import './main.css';

function Example() {
  const modal = useRef<HTMLNavModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

  return (
    <NavPage>
      <NavHeader>
        <NavToolbar>
          <NavTitle>App</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent className="nav-padding">
        <NavButton id="open-modal" expand="block">
          Open Modal
        </NavButton>
        <NavModal id="example-modal" ref={modal} trigger="open-modal">
          <NavContent>
            <NavToolbar>
              <NavTitle>Modal</NavTitle>
              <NavButtons slot="end">
                <NavButton color="light" onClick={() => dismiss()}>
                  Close
                </NavButton>
              </NavButtons>
            </NavToolbar>
            <NavList>
              <NavItem>
                <NavAvatar slot="start">
                  <NavImg src="https://i.pravatar.cc/300?u=b" />
                </NavAvatar>
                <NavLabel>
                  <h2>Connor Smith</h2>
                  <p>Sales Rep</p>
                </NavLabel>
              </NavItem>
              <NavItem>
                <NavAvatar slot="start">
                  <NavImg src="https://i.pravatar.cc/300?u=a" />
                </NavAvatar>
                <NavLabel>
                  <h2>Daniel Smith</h2>
                  <p>Product Designer</p>
                </NavLabel>
              </NavItem>
              <NavItem>
                <NavAvatar slot="start">
                  <NavImg src="https://i.pravatar.cc/300?u=d" />
                </NavAvatar>
                <NavLabel>
                  <h2>Greg Smith</h2>
                  <p>Director of Operations</p>
                </NavLabel>
              </NavItem>
              <NavItem>
                <NavAvatar slot="start">
                  <NavImg src="https://i.pravatar.cc/300?u=e" />
                </NavAvatar>
                <NavLabel>
                  <h2>Zoey Smith</h2>
                  <p>CEO</p>
                </NavLabel>
              </NavItem>
            </NavList>
          </NavContent>
        </NavModal>
      </NavContent>
    </NavPage>
  );
}

export default Example;
```
