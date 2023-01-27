```tsx
import React from 'react';
import { NavLabel, NavSegment, NavSegmentButton } from '@navify/react';

function Example() {
  return (
    <>
      <NavSegment value="buttons">
        <NavSegmentButton value="default">
          <NavLabel>Default</NavLabel>
        </NavSegmentButton>
        <NavSegmentButton value="segment">
          <NavLabel>Segment</NavLabel>
        </NavSegmentButton>
        <NavSegmentButton value="buttons">
          <NavLabel>Button</NavLabel>
        </NavSegmentButton>
      </NavSegment>

      <NavSegment value="buttons">
        <NavSegmentButton value="disabled" disabled={true}>
          <NavLabel>Disabled</NavLabel>
        </NavSegmentButton>
        <NavSegmentButton value="segment">
          <NavLabel>Segment</NavLabel>
        </NavSegmentButton>
        <NavSegmentButton value="buttons">
          <NavLabel>Button</NavLabel>
        </NavSegmentButton>
      </NavSegment>
    </>
  );
}
export default Example;
```
