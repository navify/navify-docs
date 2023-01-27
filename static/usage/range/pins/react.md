```tsx
import React from 'react';
import { NavRange } from '@navify/react';
function Example() {
  return <NavRange pin={true} pinFormatter={(value: number) => `${value}%`}></NavRange>;
}
export default Example;
```
