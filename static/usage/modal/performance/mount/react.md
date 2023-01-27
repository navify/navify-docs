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
} from '@navify/react';

function Example() {
  const modal = useRef<HTMLNavModalElement>(null);

  return (
    <NavPage>
      <NavHeader>
        <NavToolbar>
          <NavTitle>Example</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent className="nav-padding">
        <NavButton id="open-modal" expand="block">
          Open Modal
        </NavButton>
        <NavModal ref={modal} keepContentsMounted={true} trigger="open-modal">
          <NavHeader>
            <NavToolbar>
              <NavButtons slot="start">
                <NavButton onClick={() => modal.current?.dismiss()}>Close</NavButton>
              </NavButtons>
              <NavTitle>Modal</NavTitle>
            </NavToolbar>
          </NavHeader>
          <NavContent className="nav-padding">
            This content was mounted as soon as the modal was created.
          </NavContent>
        </NavModal>
      </NavContent>
    </NavPage>
  );
}

export default Example;
```
