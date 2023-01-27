```tsx
import React, { useState } from 'react';
import { NavLabel, NavRange } from '@navify/react';
import { RangeValue } from '@navify/core';
function Example() {
  const [moveStartValue, setMoveStartValue] = useState<RangeValue>();
  const [moveEndValue, setMoveEndValue] = useState<RangeValue>();
  return (
    <>
      <NavRange
        onNavKnobMoveStart={({ detail }) => setMoveStartValue(detail.value)}
        onNavKnobMoveEnd={({ detail }) => setMoveEndValue(detail.value)}
      ></NavRange>
      <div>
        <NavLabel>navKnobMoveStart: {moveStartValue as number}</NavLabel>
      </div>
      <div>
        <NavLabel>navKnobMoveEnd: {moveEndValue as number}</NavLabel>
      </div>
    </>
  );
}
export default Example;
```
