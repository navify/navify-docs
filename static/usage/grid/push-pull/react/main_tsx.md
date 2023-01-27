```tsx
import React from 'react';
import { NavCol, NavGrid, NavRow } from '@navify/react';

import './main.css';

function Example() {
  return (
    <>
      <b>Column 1 has <code>push</code> set to <code>"4"</code> and column 2 has <code>pull</code> set to <code>"4"</code></b>
      <NavGrid>
        <NavRow>
          <NavCol push="4">1</NavCol>
          <NavCol pull="4">2</NavCol>
          <NavCol>3</NavCol>
        </NavRow>
      </NavGrid>

      <b>Column 2 has <code>push</code> set to <code>"4"</code> and column 3 & 4 have <code>pull</code> set to <code>"2"</code></b>
      <NavGrid>
        <NavRow>
          <NavCol>1</NavCol>
          <NavCol push="4">2</NavCol>
          <NavCol pull="2">3</NavCol>
          <NavCol pull="2">4</NavCol>
          <NavCol>5</NavCol>
          <NavCol>6</NavCol>
        </NavRow>
      </NavGrid>

      <b>Column 1 has <code>push</code> set to <code>"3"</code> and column 2 has <code>pull</code> set to <code>"9"</code></b>
      <NavGrid>
        <NavRow>
          <NavCol size="9" push="3">1</NavCol>
          <NavCol size="3" pull="9">2</NavCol>
        </NavRow>
      </NavGrid>
    </>
  );
}
export default Example;
```
