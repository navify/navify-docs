```tsx
import React from 'react';
import { NavButton, NavContent, NavPopover } from '@navify/react';
function Example() {
  return (
    <>
      <NavButton id="auto-trigger">Size=Auto</NavButton>
      <NavPopover trigger="auto-trigger" size="auto">
        <NavContent class="nav-padding">Hello!</NavContent>
      </NavPopover>

      <NavButton id="cover-trigger">Size=Cover</NavButton>
      <NavPopover trigger="cover-trigger" size="cover">
        <NavContent class="nav-padding">Hello!</NavContent>
      </NavPopover>
    </>
  );
}
export default Example;
```
