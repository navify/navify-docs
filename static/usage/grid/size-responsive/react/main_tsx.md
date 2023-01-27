```tsx
import React from 'react';
import { NavCol, NavGrid, NavRow } from '@navify/react';

import './main.css';

function Example() {
  return (
    <>
      <b>Stacked for xs breakpoint, equal width for sm and up</b>
      <NavGrid>
        <NavRow>
          <NavCol size="12" size-sm="3">1</NavCol>
          <NavCol size="12" size-sm="3">2</NavCol>
          <NavCol size="12" size-sm="3">3</NavCol>
          <NavCol size="12" size-sm="3">4</NavCol>
        </NavRow>
      </NavGrid>

      <b>Equal width until md breakpoint, last column takes full width for md and up</b>
      <NavGrid>
        <NavRow>
          <NavCol size-md="6">1</NavCol>
          <NavCol size-md="6">2</NavCol>
          <NavCol size-md="12">3</NavCol>
        </NavRow>
      </NavGrid>

      <b>2 per row until md breakpoint, 3 per row for md, equal width for lg and up</b>
      <NavGrid>
        <NavRow>
          <NavCol size="6" size-md="4" size-lg="2">1</NavCol>
          <NavCol size="6" size-md="4" size-lg="2">2</NavCol>
          <NavCol size="6" size-md="4" size-lg="2">3</NavCol>
          <NavCol size="6" size-md="4" size-lg="2">4</NavCol>
          <NavCol size="6" size-md="4" size-lg="2">5</NavCol>
          <NavCol size="6" size-md="4" size-lg="2">6</NavCol>
        </NavRow>
      </NavGrid>
    </>
  );
}
export default Example;
```
