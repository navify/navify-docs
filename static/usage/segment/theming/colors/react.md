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
      <NavSegment color="primary" value="primary">
        <NavSegmentButton value="primary">
          <NavLabel>Primary</NavLabel>
        </NavSegmentButton>
        <NavSegmentButton value="segment">
          <NavLabel>Segment</NavLabel>
        </NavSegmentButton>
      </NavSegment>
      <NavSegment color="secondary" value="secondary">
        <NavSegmentButton value="secondary">
          <NavLabel>Secondary</NavLabel>
        </NavSegmentButton>
        <NavSegmentButton value="segment">
          <NavLabel>Segment</NavLabel>
        </NavSegmentButton>
      </NavSegment>
      <NavSegment color="tertiary" value="tertiary">
        <NavSegmentButton value="tertiary">
          <NavLabel>Tertiary</NavLabel>
        </NavSegmentButton>
        <NavSegmentButton value="segment">
          <NavLabel>Segment</NavLabel>
        </NavSegmentButton>
      </NavSegment>
      <NavSegment color="success" value="success">
        <NavSegmentButton value="success">
          <NavLabel>Success</NavLabel>
        </NavSegmentButton>
        <NavSegmentButton value="segment">
          <NavLabel>Segment</NavLabel>
        </NavSegmentButton>
      </NavSegment>
      <NavSegment color="warning" value="warning">
        <NavSegmentButton value="warning">
          <NavLabel>Warning</NavLabel>
        </NavSegmentButton>
        <NavSegmentButton value="segment">
          <NavLabel>Segment</NavLabel>
        </NavSegmentButton>
      </NavSegment>
      <NavSegment color="danger" value="danger">
        <NavSegmentButton value="danger">
          <NavLabel>Danger</NavLabel>
        </NavSegmentButton>
        <NavSegmentButton value="segment">
          <NavLabel>Segment</NavLabel>
        </NavSegmentButton>
      </NavSegment>
      <NavSegment color="light" value="light">
        <NavSegmentButton value="light">
          <NavLabel>Light</NavLabel>
        </NavSegmentButton>
        <NavSegmentButton value="segment">
          <NavLabel>Segment</NavLabel>
        </NavSegmentButton>
      </NavSegment>
      <NavSegment color="medium" value="medium">
        <NavSegmentButton value="medium">
          <NavLabel>Medium</NavLabel>
        </NavSegmentButton>
        <NavSegmentButton value="segment">
          <NavLabel>Segment</NavLabel>
        </NavSegmentButton>
      </NavSegment>
      <NavSegment color="dark" value="dark">
        <NavSegmentButton value="dark">
          <NavLabel>Dark</NavLabel>
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
