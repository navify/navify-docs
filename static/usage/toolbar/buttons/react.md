```tsx
import React from 'react';
import { NavBackButton, NavButton, NavButtons, NavIcon, NavMenuButton, NavTitle, NavToolbar } from '@navify/react';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star } from 'navicons/icons';

function Example() {
  return (
    <>
      <NavToolbar>
        <NavButtons slot="start">
          <NavButton>
            Start
          </NavButton>
        </NavButtons>
        <NavTitle>Start / End Buttons</NavTitle>
        <NavButtons slot="end">
          <NavButton>
            End
          </NavButton>
        </NavButtons>
      </NavToolbar>

      <NavToolbar>
        <NavButtons slot="secondary">
          <NavButton>
            Secondary
          </NavButton>
        </NavButtons>
        <NavButtons slot="primary">
          <NavButton>
            Primary
          </NavButton>
        </NavButtons>
        <NavTitle>Primary / Secondary Buttons</NavTitle>
      </NavToolbar>

      <NavToolbar>
        <NavButtons slot="secondary">
          <NavButton>
            <NavIcon slot="icon-only" icon={personCircle}></NavIcon>
          </NavButton>
          <NavButton>
            <NavIcon slot="icon-only" icon={search}></NavIcon>
          </NavButton>
        </NavButtons>
        <NavButtons slot="primary">
          <NavButton>
            <NavIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical}></NavIcon>
          </NavButton>
        </NavButtons>
        <NavTitle>Icon Buttons</NavTitle>
      </NavToolbar>

      <NavToolbar>
        <NavButtons slot="secondary">
          <NavButton fill="solid">
            <NavIcon slot="start" icon={personCircle}></NavIcon>
            Contact
          </NavButton>
        </NavButtons>
        <NavButtons slot="primary">
          <NavButton fill="solid">
            Help
            <NavIcon slot="end" icon={helpCircle}></NavIcon>
          </NavButton>
        </NavButtons>
        <NavTitle>Solid Buttons</NavTitle>
      </NavToolbar>

      <NavToolbar>
        <NavButtons slot="secondary">
          <NavButton fill="outline">
            <NavIcon slot="start" icon={star}></NavIcon>
            Star
          </NavButton>
        </NavButtons>
        <NavButtons slot="primary">
          <NavButton fill="outline">
            Edit
            <NavIcon slot="end" icon={create}></NavIcon>
          </NavButton>
        </NavButtons>
        <NavTitle>Outline Buttons</NavTitle>
      </NavToolbar>

      <NavToolbar>
        <NavButtons slot="start">
          <NavBackButton defaultHref="#"></NavBackButton>
        </NavButtons>
        <NavTitle>Back Button</NavTitle>
      </NavToolbar>

      <NavToolbar>
        <NavButtons slot="start">
          <NavMenuButton autoHide={false}></NavMenuButton>
        </NavButtons>
        <NavTitle>Menu Button</NavTitle>
      </NavToolbar>
    </>
  );
}
export default Example;
```
