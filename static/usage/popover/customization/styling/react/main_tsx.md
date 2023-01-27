```tsx
import React from 'react';
import { NavButton, NavContent, NavPopover } from '@navify/react';

import './main.css';

function Example() {
  return (
    <>
      <NavButton id="trigger-button">Click Me</NavButton>
      <NavPopover trigger="trigger-button">
        <NavContent className="nav-padding">Hello Styled World!</NavContent>
      </NavPopover>
    </>
  );
}
export default Example;
```
