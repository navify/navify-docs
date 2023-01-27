```tsx
import React from 'react';
import { NavLabel, NavSegment, NavSegmentButton } from '@navify/react';

function Example() {
  return (
    <>
      <NavSegment value="default">
        <NavSegmentButton value="default">
          <NavLabel>Default</NavLabel>
        </NavSegmentButton>
        <NavSegmentButton value="segment">
          <NavLabel>Segment</NavLabel>
        </NavSegmentButton>
      </NavSegment>

      <NavSegment disabled={true} value="disabled">
        <NavSegmentButton value="disabled">
          <NavLabel>Disabled</NavLabel>
        </NavSegmentButton>
        <NavSegmentButton value="segment">
          <NavLabel>Segment</NavLabel>
        </NavSegmentButton>
      </NavSegment>
    </>
  );
}
export default Example;
```
