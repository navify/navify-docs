```tsx
import React from 'react';
import { NavIcon, NavLabel, NavSegment, NavSegmentButton } from '@navify/react';
import { call, heart, pin } from 'navicons/icons';

function Example() {
  return (
    <>
      <NavSegment value="heart">
        <NavSegmentButton value="call">
          <NavIcon icon={call}></NavIcon>
        </NavSegmentButton>
        <NavSegmentButton value="heart">
          <NavIcon icon={heart}></NavIcon>
        </NavSegmentButton>
        <NavSegmentButton value="pin">
          <NavIcon icon={pin}></NavIcon>
        </NavSegmentButton>
      </NavSegment>

      <NavSegment value="heart">
        <NavSegmentButton value="call">
          <NavLabel>Call</NavLabel>
          <NavIcon icon={call}></NavIcon>
        </NavSegmentButton>
        <NavSegmentButton value="heart">
          <NavLabel>Heart</NavLabel>
          <NavIcon icon={heart}></NavIcon>
        </NavSegmentButton>
        <NavSegmentButton value="pin">
          <NavLabel>Pin</NavLabel>
          <NavIcon icon={pin}></NavIcon>
        </NavSegmentButton>
      </NavSegment>

      <NavSegment value="heart">
        <NavSegmentButton value="call" layout="icon-bottom">
          <NavLabel>Call</NavLabel>
          <NavIcon icon={call}></NavIcon>
        </NavSegmentButton>
        <NavSegmentButton value="heart" layout="icon-bottom">
          <NavLabel>Heart</NavLabel>
          <NavIcon icon={heart}></NavIcon>
        </NavSegmentButton>
        <NavSegmentButton value="pin" layout="icon-bottom">
          <NavLabel>Pin</NavLabel>
          <NavIcon icon={pin}></NavIcon>
        </NavSegmentButton>
      </NavSegment>

      <NavSegment value="heart">
        <NavSegmentButton value="call" layout="icon-start">
          <NavLabel>Call</NavLabel>
          <NavIcon icon={call}></NavIcon>
        </NavSegmentButton>
        <NavSegmentButton value="heart" layout="icon-start">
          <NavLabel>Heart</NavLabel>
          <NavIcon icon={heart}></NavIcon>
        </NavSegmentButton>
        <NavSegmentButton value="pin" layout="icon-start">
          <NavLabel>Pin</NavLabel>
          <NavIcon icon={pin}></NavIcon>
        </NavSegmentButton>
      </NavSegment>

      <NavSegment value="heart">
        <NavSegmentButton value="call" layout="icon-end">
          <NavLabel>Call</NavLabel>
          <NavIcon icon={call}></NavIcon>
        </NavSegmentButton>
        <NavSegmentButton value="heart" layout="icon-end">
          <NavLabel>Heart</NavLabel>
          <NavIcon icon={heart}></NavIcon>
        </NavSegmentButton>
        <NavSegmentButton value="pin" layout="icon-end">
          <NavLabel>Pin</NavLabel>
          <NavIcon icon={pin}></NavIcon>
        </NavSegmentButton>
      </NavSegment>
    </>
  );
}
export default Example;
```
