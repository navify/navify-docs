```tsx
import React from 'react';
import { NavRippleEffect } from '@navify/react';

import './main.css';

function Example() {
  return (
    <div className="wrapper">
      <b>Click on a shape to see the ripple</b>

      <div className="nav-activatable ripple-parent rectangle">
        <NavRippleEffect></NavRippleEffect>
      </div>

      <div className="nav-activatable ripple-parent rounded-rectangle">
        <NavRippleEffect></NavRippleEffect>
      </div>

      <div className="nav-activatable ripple-parent circle">
        <NavRippleEffect></NavRippleEffect>
      </div>
    </div>
  );
}
export default Example;
```
