```tsx
import React from 'react';
import { NavRange } from '@navify/react';
function Example() {
  return (
    <NavRange
      dualKnobs={true}
      value={{
        lower: 20,
        upper: 80,
      }}
    ></NavRange>
  );
}
export default Example;
```
