```tsx
import React, { useState } from 'react';
import { NavLabel, NavRange } from '@navify/react';
import { RangeValue } from '@navify/core';
function Example() {
  const [lastEmittedValue, setLastEmittedValue] = useState<RangeValue>();
  return (
    <>
      <NavRange onNavChange={({ detail }) => setLastEmittedValue(detail.value)}></NavRange>
      <NavLabel>navChange emitted value: {lastEmittedValue as number}</NavLabel>
    </>
  );
}
export default Example;
```
