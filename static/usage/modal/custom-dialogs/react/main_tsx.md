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
  NavIcon,
} from '@navify/react';
import { personCircle } from 'navicons/icons';

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
      <NavContent class="nav-padding">
        <NavButton id="open-custom-dialog" expand="block">
          Open Custom Dialog
        </NavButton>
        <NavModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h1>Dialog header</h1>
        
            <NavList lines="none">
              <NavItem button={true} detail={false} onClick={dismiss}>
                <NavIcon icon={personCircle}></NavIcon>
                <NavLabel>Item 1</NavLabel>
              </NavItem>
              <NavItem button={true} detail={false} onClick={dismiss}>
                <NavIcon icon={personCircle}></NavIcon>
                <NavLabel>Item 2</NavLabel>
              </NavItem>
              <NavItem button={true} detail={false} onClick={dismiss}>
                <NavIcon icon={personCircle}></NavIcon>
                <NavLabel>Item 3</NavLabel>
              </NavItem>
            </NavList>
          </div>
        </NavModal>
      </NavContent>
    </NavPage>
  );
}

export default Example;
```
