```tsx
import React, { useRef, useState } from 'react';
import { NavButton, NavContent, NavPopover } from '@navify/react';

function Example() {
  const popover = useRef<HTMLNavPopoverElement>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const openPopover = (e: any) => {
    popover.current!.event = e;
    setPopoverOpen(true);
  };

  return (
    <>
      <NavButton onClick={openPopover}>Click Me</NavButton>
      <NavPopover ref={popover} isOpen={popoverOpen} onDidDismiss={() => setPopoverOpen(false)}>
        <NavContent class="nav-padding">Hello World!</NavContent>
      </NavPopover>
    </>
  );
}
export default Example;
```
