```tsx
import React from 'react';
import { NavCol, NavGrid, NavRow } from '@navify/react';

import './main.css';

function Example() {
  return (
    <NavGrid fixed={true}>
      <NavRow>
        <NavCol>1</NavCol>
        <NavCol>2</NavCol>
        <NavCol>3</NavCol>
      </NavRow>
    </NavGrid>
  );
}
export default Example;
```
