```tsx
import React, { useRef } from 'react';
import {
  createAnimation,
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

  function dismiss() {
    modal.current?.dismiss();
  }

  const enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root?.querySelector('nav-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl: HTMLElement) => {
    return enterAnimation(baseEl).direction('reverse');
  };

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
        <NavModal
          id="example-modal"
          ref={modal}
          trigger="open-modal"
          enterAnimation={enterAnimation}
          leaveAnimation={leaveAnimation}
        >
          <NavContent>
            <NavToolbar>
              <NavTitle>Modal</NavTitle>
              <NavButtons slot="end">
                <NavButton onClick={() => dismiss()}>Close</NavButton>
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
