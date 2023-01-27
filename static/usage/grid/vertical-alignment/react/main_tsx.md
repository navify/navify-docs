```tsx
import React from 'react';
import { NavCol, NavGrid, NavRow } from '@navify/react';

import './main.css';

function Example() {
  return (
    <>
      <b>Columns aligned at the top</b>
      <NavGrid>
        <NavRow class="nav-align-items-start">
          <NavCol>
            1
          </NavCol>
          <NavCol>
            2
          </NavCol>
          <NavCol>
            3
          </NavCol>
          <NavCol>
            4 <br />
            # <br />
            # <br />
            # <br />
          </NavCol>
        </NavRow>
      </NavGrid>

      <b>Columns aligned at the center</b>
      <NavGrid>
        <NavRow class="nav-align-items-center">
          <NavCol>
            1
          </NavCol>
          <NavCol>
            2
          </NavCol>
          <NavCol>
            3
          </NavCol>
          <NavCol>
            4 <br />
            # <br />
            # <br />
            # <br />
          </NavCol>
        </NavRow>
      </NavGrid>

      <b>Columns aligned at the bottom</b>
      <NavGrid>
        <NavRow class="nav-align-items-end">
          <NavCol>
            1
          </NavCol>
          <NavCol>
            2
          </NavCol>
          <NavCol>
            3
          </NavCol>
          <NavCol>
            4 <br />
            # <br />
            # <br />
            # <br />
          </NavCol>
        </NavRow>
      </NavGrid>
    </>
  );
}
export default Example;
```
