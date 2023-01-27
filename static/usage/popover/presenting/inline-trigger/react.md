```tsx
import React from 'react';
import { NavButton, NavContent, NavPopover } from '@navify/react';
function Example() {
  return (
    <>
      <NavButton id="click-trigger">Left-Click Me</NavButton>
      <NavPopover trigger="click-trigger" triggerAction="click">
        <NavContent class="nav-padding">Hello World!</NavContent>
      </NavPopover>

      <NavButton id="context-menu-trigger">Right-Click Me</NavButton>
      <NavPopover trigger="context-menu-trigger" triggerAction="context-menu">
        <NavContent class="nav-padding">Hello World!</NavContent>
      </NavPopover>

      <NavButton id="hover-trigger">Hover Over Me</NavButton>
      <NavPopover trigger="hover-trigger" triggerAction="hover">
        <NavContent class="nav-padding">Hello World!</NavContent>
      </NavPopover>
    </>
  );
}
export default Example;
```
