```tsx
import React, { useState, useRef, useEffect } from 'react';
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

function Example() {
  const modal = useRef<HTMLNavModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

  return (
    <NavPage ref={page}>
      <NavHeader>
        <NavToolbar>
          <NavTitle>App</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent className="nav-padding">
        <NavButton id="open-modal" expand="block">
          Open
        </NavButton>
        <NavModal ref={modal} trigger="open-modal" presentingElement={presentingElement!}>
          <NavHeader>
            <NavToolbar>
              <NavTitle>Modal</NavTitle>
              <NavButtons slot="end">
                <NavButton onClick={() => dismiss()}>Close</NavButton>
              </NavButtons>
            </NavToolbar>
          </NavHeader>
          <NavContent className="nav-padding">
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
