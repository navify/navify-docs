```tsx
import React from 'react';
import { NavCol, NavGrid, NavRow } from '@navify/react';

import './main.css';

function Example() {
  return (
    <>
      <b>No offset for xs breakpoint, offset 1st column for sm and up</b>
      <NavGrid>
        <NavRow>
          <NavCol offset-sm="2">1</NavCol>
          <NavCol>2</NavCol>
          <NavCol>3</NavCol>
          <NavCol>4</NavCol>
          <NavCol>5</NavCol>
        </NavRow>
      </NavGrid>

      <b>No offset for xs breakpoint, offset last 3 columns for md and up</b>
      <NavGrid>
        <NavRow>
          <NavCol>1</NavCol>
          <NavCol offset-md="2">2</NavCol>
          <NavCol offset-md="2">3</NavCol>
          <NavCol offset-md="2">4</NavCol>
        </NavRow>
      </NavGrid>

      <b>Offset all columns by 6 for xs breakpoint, offset by 4 for md, offset by 2 for lg and up</b>
      <NavGrid>
        <NavRow>
          <NavCol offset="6" offset-md="4" offset-lg="2">1</NavCol>
          <NavCol offset="6" offset-md="4" offset-lg="2">2</NavCol>
        </NavRow>
      </NavGrid>
    </>
  );
}
export default Example;
```
