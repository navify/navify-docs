```tsx
import React from 'react';
import { NavButton, NavContent, NavPopover } from '@navify/react';
function Example() {
  return (
    <NavContent>
      <NavButton id="open-popover">Open Popover</NavButton>
      <NavPopover keepContentsMounted={true} trigger="open-popover">
        <NavContent class="nav-padding">This content was mounted as soon as the popover was created.</NavContent>
      </NavPopover>
    </NavContent>
  );
}
export default Example;
```
