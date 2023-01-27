```tsx
import React from 'react';
import { NavRippleEffect } from '@navify/react';

import './main.css';

function Example() {
  return (
    <div className="wrapper">
      <b>Click on a shape to see the ripple</b>

      <div className="nav-activatable ripple-parent custom-parent">
        Custom Parent Color
        <NavRippleEffect></NavRippleEffect>
      </div>

      <div className="nav-activatable ripple-parent">
        Custom Ripple Color
        <NavRippleEffect className="custom-ripple"></NavRippleEffect>
      </div>
    </div>
  );
}
export default Example;
```
