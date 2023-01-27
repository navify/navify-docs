```tsx
import React, { useRef } from 'react';
import {
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
  NavSearchbar,
} from '@navify/react';

function Example() {
  const modal = useRef<HTMLNavModalElement>(null);

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
        <NavModal ref={modal} trigger="open-modal" initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 0.75]}>
          <NavContent className="nav-padding">
            <NavSearchbar onClick={() => modal.current?.setCurrentBreakpoint(0.75)} placeholder="Search"></NavSearchbar>
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
