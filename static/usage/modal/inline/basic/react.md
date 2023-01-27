```tsx
import React, { useState, useRef } from 'react';
import {
  NavButtons,
  NavButton,
  NavModal,
  NavHeader,
  NavContent,
  NavToolbar,
  NavTitle,
  NavPage,
  NavItem,
  NavLabel,
  NavInput,
} from '@navify/react';
import { OverlayEventDetail } from '@navify/core/components';

function Example() {
  const modal = useRef<HTMLNavModalElement>(null);
  const input = useRef<HTMLNavInputElement>(null);

  const [message, setMessage] = useState(
    'This modal example uses triggers to automatically open a modal when the button is clicked.'
  );

  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }

  return (
    <NavPage>
      <NavHeader>
        <NavToolbar>
          <NavTitle>Inline Modal</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent className="nav-padding">
        <NavButton id="open-modal" expand="block">
          Open
        </NavButton>
        <p>{message}</p>
        <NavModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
          <NavHeader>
            <NavToolbar>
              <NavButtons slot="start">
                <NavButton onClick={() => modal.current?.dismiss()}>Cancel</NavButton>
              </NavButtons>
              <NavTitle>Welcome</NavTitle>
              <NavButtons slot="end">
                <NavButton strong={true} onClick={() => confirm()}>
                  Confirm
                </NavButton>
              </NavButtons>
            </NavToolbar>
          </NavHeader>
          <NavContent className="nav-padding">
            <NavItem>
              <NavLabel position="stacked">Enter your name</NavLabel>
              <NavInput ref={input} type="text" placeholder="Your name" />
            </NavItem>
          </NavContent>
        </NavModal>
      </NavContent>
    </NavPage>
  );
}

export default Example;
```
