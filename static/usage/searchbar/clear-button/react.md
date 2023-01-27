```tsx
import React from 'react';
import { NavSearchbar } from '@navify/react';
import { trashBin } from 'navicons/icons';

function Example() {
  return (
    <>
      <NavSearchbar showClearButton="focus" value="Show on Focus"></NavSearchbar>
      <NavSearchbar showClearButton="always" value="Always Show"></NavSearchbar>
      <NavSearchbar showClearButton="never" value="Never Show"></NavSearchbar>
      <NavSearchbar showClearButton="always" clearIcon={trashBin} value="Custom Clear Icon"></NavSearchbar>
    </>
  );
}
export default Example;
```
