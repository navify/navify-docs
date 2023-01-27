```tsx
import React from 'react';
import { NavCol, NavGrid, NavRow } from '@navify/react';

import './main.css';

function Example() {
  return (
    <>
      <b>Total number of columns is set to <code>6</code>, column <code>size</code> is set to <code>1</code></b>
      <NavGrid>
        <NavRow>
          <NavCol size="1">1</NavCol>
          <NavCol size="1">2</NavCol>
          <NavCol size="1">3</NavCol>
          <NavCol size="1">4</NavCol>
        </NavRow>
      </NavGrid>
    </>
  );
}
export default Example;
```
