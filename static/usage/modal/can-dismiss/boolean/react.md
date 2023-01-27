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
  NavItem,
  NavLabel,
  NavCheckbox,
} from '@navify/react';

function Example() {
  const modal = useRef<HTMLNavModalElement>(null);
  const page = useRef(undefined);

  const [canDismiss, setCanDismiss] = useState(false);
  const [presentingElement, setPresentingElement] = useState<HTMLElement | undefined>(undefined);

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
        <NavModal ref={modal} trigger="open-modal" canDismiss={canDismiss} presentingElement={presentingElement}>
          <NavHeader>
            <NavToolbar>
              <NavTitle>Modal</NavTitle>
              <NavButtons slot="end">
                <NavButton onClick={() => dismiss()}>Close</NavButton>
              </NavButtons>
            </NavToolbar>
          </NavHeader>
          <NavContent>
            <p className="nav-padding-horizontal">You must accept the terms and conditions to close this modal.</p>
            <NavItem>
              <NavLabel className="nav-text-wrap" {...{ for: 'terms' }}>
                Do you accept the terms and conditions?
              </NavLabel>
              <NavCheckbox
                id="terms"
                checked={canDismiss}
                onNavChange={(ev) => {
                  setCanDismiss(ev.detail.checked);
                }}
              ></NavCheckbox>
            </NavItem>
          </NavContent>
        </NavModal>
      </NavContent>
    </NavPage>
  );
}

export default Example;
```
