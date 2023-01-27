```tsx
import React from 'react';
import { NavCol, NavGrid, NavRow } from '@navify/react';

import './main.css';

function Example() {
  return (
    <>
      <b>No change for xs breakpoint, push 1st column & pull 2nd column for sm and up</b>
      <NavGrid>
        <NavRow>
          <NavCol push-sm="6">1</NavCol>
          <NavCol pull-sm="6">2</NavCol>
        </NavRow>
      </NavGrid>

      <b>No change for xs breakpoint, push middle columns & pull last column for md and up</b>
      <NavGrid>
        <NavRow>
          <NavCol>1</NavCol>
          <NavCol push-md="3">2</NavCol>
          <NavCol push-md="3">3</NavCol>
          <NavCol pull-md="6">4</NavCol>
        </NavRow>
      </NavGrid>

      <b>Switch first and last 3 columns for xs breakpoints, reverse columns for lg and up</b>
      <NavGrid>
        <NavRow>
          <NavCol push="6" push-lg="10">1</NavCol>
          <NavCol push="6" push-lg="6">2</NavCol>
          <NavCol push="6" push-lg="2">3</NavCol>
          <NavCol pull="6" pull-lg="2">4</NavCol>
          <NavCol pull="6" pull-lg="6">5</NavCol>
          <NavCol pull="6" pull-lg="10">6</NavCol>
        </NavRow>
      </NavGrid>
    </>
  );
}
export default Example;
```
