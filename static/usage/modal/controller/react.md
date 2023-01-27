```tsx
import React, { useState, useRef } from 'react';
import {
  NavButtons,
  NavButton,
  NavHeader,
  NavContent,
  NavToolbar,
  NavTitle,
  NavPage,
  NavItem,
  NavLabel,
  NavInput,
  useNavModal,
} from '@navify/react';
import { OverlayEventDetail } from '@navify/core/components';

const ModalExample = ({
  onDismiss,
}: {
  onDismiss: (data?: string | null | undefined | number, role?: string) => void;
}) => {
  const inputRef = useRef<HTMLNavInputElement>(null);
  return (
    <NavPage>
      <NavHeader>
        <NavToolbar>
          <NavButtons slot="start">
            <NavButton color="medium" onClick={() => onDismiss(null, 'cancel')}>
              Cancel
            </NavButton>
          </NavButtons>
          <NavTitle>Welcome</NavTitle>
          <NavButtons slot="end">
            <NavButton onClick={() => onDismiss(inputRef.current?.value, 'confirm')}>Confirm</NavButton>
          </NavButtons>
        </NavToolbar>
      </NavHeader>
      <NavContent className="nav-padding">
        <NavItem>
          <NavLabel position="stacked">Enter your name</NavLabel>
          <NavInput ref={inputRef} placeholder="Your name" />
        </NavItem>
      </NavContent>
    </NavPage>
  );
};

function Example() {
  const [present, dismiss] = useNavModal(ModalExample, {
    onDismiss: (data: string, role: string) => dismiss(data, role),
  });
  const [message, setMessage] = useState('This modal example uses the modalController to present and dismiss modals.');

  function openModal() {
    present({
      onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
        if (ev.detail.role === 'confirm') {
          setMessage(`Hello, ${ev.detail.data}!`);
        }
      },
    });
  }

  return (
    <NavPage>
      <NavHeader>
        <NavToolbar>
          <NavTitle>Controller Modal</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent className="nav-padding">
        <NavButton expand="block" onClick={() => openModal()}>
          Open
        </NavButton>
        <p>{message}</p>
      </NavContent>
    </NavPage>
  );
}

export default Example;
```
