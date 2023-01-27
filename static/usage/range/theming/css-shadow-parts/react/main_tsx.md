```tsx
import React from 'react';
import { NavRange } from '@navify/react';

import './main.css';

function Example() {
  return <NavRange min={0} max={10} value={5} pin={true} ticks={true} snaps={true}></NavRange>;
}

export default Example;
```
