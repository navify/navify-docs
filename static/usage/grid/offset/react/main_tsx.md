```tsx
import React from 'react';
import { NavCol, NavGrid, NavRow } from '@navify/react';

import './main.css';

function Example() {
  return (
    <>
      <b>Column 2 has <code>offset</code> set to <code>"3"</code></b>
      <NavGrid>
        <NavRow>
          <NavCol>1</NavCol>
          <NavCol offset="3">2</NavCol>
          <NavCol>3</NavCol>
        </NavRow>
      </NavGrid>

      <b>Column 5 has <code>offset</code> set to <code>"2"</code></b>
      <NavGrid>
        <NavRow>
          <NavCol>1</NavCol>
          <NavCol>2</NavCol>
          <NavCol>3</NavCol>
          <NavCol>4</NavCol>
          <NavCol offset="2">5</NavCol>
        </NavRow>
      </NavGrid>

      <b>Column 1 has <code>offset</code> set to <code>"4"</code></b>
      <NavGrid>
        <NavRow>
          <NavCol size="2" offset="4">1</NavCol>
          <NavCol size="2">2</NavCol>
        </NavRow>
      </NavGrid>
    </>
  );
}
export default Example;
```
