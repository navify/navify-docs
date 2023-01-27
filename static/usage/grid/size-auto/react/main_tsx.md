```tsx
import React from 'react';
import { NavCol, NavGrid, NavInput, NavRow } from '@navify/react';

import './main.css';

function Example() {
  return (
    <>
      <b>Column 1 has <code>size</code> set to <code>"auto"</code></b>
      <NavGrid>
        <NavRow>
          <NavCol size="auto">1</NavCol>
          <NavCol>2</NavCol>
          <NavCol>3</NavCol>
        </NavRow>
      </NavGrid>

      <b>Column 3 contains an input and has <code>size</code> set to <code>"auto"</code></b>
      <NavGrid>
        <NavRow>
          <NavCol>1</NavCol>
          <NavCol>2</NavCol>
          <NavCol size="auto">
            <NavInput placeholder="3"></NavInput>
          </NavCol>
          <NavCol>4</NavCol>
          <NavCol>5</NavCol>
          <NavCol>6</NavCol>
        </NavRow>
      </NavGrid>

      <b>Column 2 has <code>size</code> set to <code>"auto"</code> and a defined width</b>
      <NavGrid>
        <NavRow>
          <NavCol>1</NavCol>
          <NavCol size="auto">
            <div style={{width: "150px"}}>2</div>
          </NavCol>
        </NavRow>
      </NavGrid>
    </>
  );
}
export default Example;
```
