```tsx
import React from 'react';
import { NavCol, NavGrid, NavRow } from '@navify/react';

import './main.css';

function Example() {
  return (
    <>
      <b>Columns aligned at the start</b>
      <NavGrid>
        <NavRow class="nav-justify-content-start">
          <NavCol size="3">
            1
          </NavCol>
          <NavCol size="3">
            2
          </NavCol>
        </NavRow>
      </NavGrid>

      <b>Columns aligned at the center</b>
      <NavGrid>
        <NavRow class="nav-justify-content-center">
          <NavCol size="3">
            1
          </NavCol>
          <NavCol size="3">
            2
          </NavCol>
        </NavRow>
      </NavGrid>

      <b>Columns aligned at the end</b>
      <NavGrid>
        <NavRow class="nav-justify-content-end">
          <NavCol size="3">
            1
          </NavCol>
          <NavCol size="3">
            2
          </NavCol>
        </NavRow>
      </NavGrid>

      <b>Columns aligned with space around</b>
      <NavGrid>
        <NavRow class="nav-justify-content-around">
          <NavCol size="3">
            1
          </NavCol>
          <NavCol size="3">
            2
          </NavCol>
        </NavRow>
      </NavGrid>

      <b>Columns aligned with space between</b>
      <NavGrid>
        <NavRow class="nav-justify-content-between">
          <NavCol size="3">
            1
          </NavCol>
          <NavCol size="3">
            2
          </NavCol>
        </NavRow>
      </NavGrid>
    </>
  );
}
export default Example;
```
