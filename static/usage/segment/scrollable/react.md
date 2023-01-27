```tsx
import React from 'react';
import { NavIcon, NavSegment, NavSegmentButton } from '@navify/react';
import { home, heart, pin, star, call, globe, basket, barbell, trash, person } from 'navicons/icons';

function Example() {
  return (
    <NavSegment scrollable={true} value="heart">
      <NavSegmentButton value="home">
        <NavIcon icon={home}></NavIcon>
      </NavSegmentButton>
      <NavSegmentButton value="heart">
        <NavIcon icon={heart}></NavIcon>
      </NavSegmentButton>
      <NavSegmentButton value="pin">
        <NavIcon icon={pin}></NavIcon>
      </NavSegmentButton>
      <NavSegmentButton value="star">
        <NavIcon icon={star}></NavIcon>
      </NavSegmentButton>
      <NavSegmentButton value="call">
        <NavIcon icon={call}></NavIcon>
      </NavSegmentButton>
      <NavSegmentButton value="globe">
        <NavIcon icon={globe}></NavIcon>
      </NavSegmentButton>
      <NavSegmentButton value="basket">
        <NavIcon icon={basket}></NavIcon>
      </NavSegmentButton>
      <NavSegmentButton value="barbell">
        <NavIcon icon={barbell}></NavIcon>
      </NavSegmentButton>
      <NavSegmentButton value="trash">
        <NavIcon icon={trash}></NavIcon>
      </NavSegmentButton>
      <NavSegmentButton value="person">
        <NavIcon icon={person}></NavIcon>
      </NavSegmentButton>
    </NavSegment>
  );
}
export default Example;
```
