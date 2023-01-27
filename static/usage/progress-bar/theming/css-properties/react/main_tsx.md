
```tsx
import React from 'react';
import { NavProgressBar } from '@navify/react';

import './main.css';

function Example() {
  return (
    <>
      <NavProgressBar value={.25} buffer={.5}></NavProgressBar>
      <NavProgressBar type="indeterminate"></NavProgressBar>
    </>
  );
}
export default Example;
```
