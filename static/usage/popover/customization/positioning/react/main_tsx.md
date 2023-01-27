```tsx
import React from 'react';
import { NavButton, NavContent, NavPopover } from '@navify/react';

import './main.css';

function Example() {
  return (
    <div className="container">
      <NavButton id="top-center">Side=Top, Alignment=Center</NavButton>
      <NavPopover trigger="top-center" side="top" alignment="center">
        <NavContent class="nav-padding">Hello World!</NavContent>
      </NavPopover>

      <NavButton id="bottom-start">Side=Bottom, Alignment=Start</NavButton>
      <NavPopover trigger="bottom-start" side="bottom" alignment="start">
        <NavContent class="nav-padding">Hello World!</NavContent>
      </NavPopover>

      <NavButton id="left-start">Side=Left, Alignment=Start</NavButton>
      <NavPopover trigger="left-start" side="left" alignment="start">
        <NavContent class="nav-padding">Hello World!</NavContent>
      </NavPopover>

      <NavButton id="right-end">Side=Right, Alignment=End</NavButton>
      <NavPopover trigger="right-end" side="right" alignment="end">
        <NavContent class="nav-padding">Hello World!</NavContent>
      </NavPopover>
    </div>
  );
}
export default Example;
```
