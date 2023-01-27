```tsx
import React from 'react';
import {
  NavBackdrop,
  NavHeader,
  NavToolbar,
  NavTitle,
  NavContent,
  NavItem,
  NavCheckbox,
  NavLabel,
  NavButton,
} from '@navify/react';

function Example() {
  return (
    <>
      <NavBackdrop visible={true}></NavBackdrop>
      <div className="nav-page">
        <NavHeader>
          <NavToolbar>
            <NavTitle>Backdrop</NavTitle>
          </NavToolbar>
        </NavHeader>
        <NavContent className="nav-padding">
          <NavItem>
            <NavCheckbox slot="start"></NavCheckbox>
            <NavLabel>Checkbox</NavLabel>
          </NavItem>
          <NavButton expand="block">Button</NavButton>
        </NavContent>
      </div>
    </>
  );
}
export default Example;
```
