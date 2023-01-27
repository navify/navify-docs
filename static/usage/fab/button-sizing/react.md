```tsx
import React from 'react';
import { NavFab, NavFabButton, NavFabList, NavIcon } from '@navify/react';
import { add, colorPalette, document, globe } from 'navicons/icons';

function Example() {
  return (
    <NavFab>
      <NavFabButton size="small">
        <NavIcon icon={add}></NavIcon>
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
  );
}
export default Example;
```
