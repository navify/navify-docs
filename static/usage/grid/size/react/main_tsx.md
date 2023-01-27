```tsx
import React from 'react';
import { NavCol, NavGrid, NavRow } from '@navify/react';

import './main.css';

function Example() {
  return (
    <>
      <b>Column 2 has <code>size</code> set to <code>"8"</code></b>
      <NavGrid>
        <NavRow>
          <NavCol>1</NavCol>
          <NavCol size="8">2</NavCol>
          <NavCol>3</NavCol>
        </NavRow>
      </NavGrid>

      <b>Columns 3 & 4 have <code>size</code> set to <code>"3"</code></b>
      <NavGrid>
        <NavRow>
          <NavCol>1</NavCol>
          <NavCol>2</NavCol>
          <NavCol size="3">3</NavCol>
          <NavCol size="3">4</NavCol>
          <NavCol>5</NavCol>
          <NavCol>6</NavCol>
        </NavRow>
      </NavGrid>

      <b>Columns 1 & 2 have <code>size</code> set to <code>"4"</code></b>
      <NavGrid>
        <NavRow>
          <NavCol size="4">1</NavCol>
          <NavCol size="4">2</NavCol>
        </NavRow>
      </NavGrid>
    </>
  );
}
export default Example;
```
