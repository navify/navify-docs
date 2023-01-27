```tsx
import React from 'react';
import { NavContent, NavFab, NavFabButton, NavFabList, NavHeader, NavIcon, NavTitle, NavToolbar } from '@navify/react';
import { chevronDownCircle, chevronForwardCircle, chevronUpCircle, colorPalette, document, globe } from 'navicons/icons';

function Example() {
  return (
    <>
      <NavHeader>
        <NavToolbar>
          <NavTitle>Fab Buttons</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent className="nav-padding">
        <NavFab slot="fixed" vertical="top" horizontal="start">
          <NavFabButton>
            <NavIcon icon={chevronForwardCircle}></NavIcon>
          </NavFabButton>
          <NavFabList side="end">
            <NavFabButton>
              <NavIcon icon={document}></NavIcon>
            </NavFabButton>
            <NavFabButton>
              <NavIcon icon={colorPalette}></NavIcon>
            </NavFabButton>
            <NavFabButton>
              <NavIcon icon={globe}></NavIcon>
            </NavFabButton>
          </NavFabList>
        </NavFab>

        <NavFab slot="fixed" vertical="top" horizontal="end" edge={true}>
          <NavFabButton>
            <NavIcon icon={chevronDownCircle}></NavIcon>
          </NavFabButton>
          <NavFabList side="bottom">
            <NavFabButton>
              <NavIcon icon={document}></NavIcon>
            </NavFabButton>
            <NavFabButton>
              <NavIcon icon={colorPalette}></NavIcon>
            </NavFabButton>
            <NavFabButton>
              <NavIcon icon={globe}></NavIcon>
            </NavFabButton>
          </NavFabList>
        </NavFab>
      
        <NavFab slot="fixed" vertical="bottom" horizontal="end">
          <NavFabButton>
            <NavIcon icon={chevronUpCircle}></NavIcon>
          </NavFabButton>
          <NavFabList side="top">
            <NavFabButton>
              <NavIcon icon={document}></NavIcon>
            </NavFabButton>
            <NavFabButton>
              <NavIcon icon={colorPalette}></NavIcon>
            </NavFabButton>
            <NavFabButton>
              <NavIcon icon={globe}></NavIcon>
            </NavFabButton>
          </NavFabList>
        </NavFab>
      </NavContent>
    </>
  );
}
export default Example;
```
