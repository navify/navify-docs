```tsx
import React from 'react';
import { NavHeader, NavSegment, NavSegmentButton, NavTitle, NavToolbar } from '@navify/react';

function Example() {
  return (
    <NavHeader>
      <NavToolbar>
        <NavSegment value="all">
          <NavSegmentButton value="all">
            All
          </NavSegmentButton>
          <NavSegmentButton value="favorites">
            Favorites
          </NavSegmentButton>
        </NavSegment>
      </NavToolbar>
    </NavHeader>
  );
}
export default Example;
```
