```tsx
import React from 'react';
import { NavLabel, NavSegment, NavSegmentButton } from '@navify/react';

import './main.css';

function Example() {
  return (
    <NavSegment value="custom">
      <NavSegmentButton value="custom">
        <NavLabel>Custom</NavLabel>
      </NavSegmentButton>
      <NavSegmentButton value="segment">
        <NavLabel>Segment</NavLabel>
      </NavSegmentButton>
      <NavSegmentButton value="buttons">
        <NavLabel>Buttons</NavLabel>
      </NavSegmentButton>
    </NavSegment>
  );
}
export default Example;
```
