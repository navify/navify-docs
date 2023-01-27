```tsx
import React from 'react';
import { NavSearchbar } from '@navify/react';
import { trash } from 'navicons/icons';

function Example() {
  return (
    <>
      <NavSearchbar showCancelButton="focus" placeholder="Show on Focus"></NavSearchbar>
      <NavSearchbar showCancelButton="always" placeholder="Always Show"></NavSearchbar>
      <NavSearchbar showCancelButton="never" placeholder="Never Show"></NavSearchbar>
      <NavSearchbar showCancelButton="always" cancelButtonText="Custom Cancel" cancelButtonIcon={trash} placeholder="Custom Cancel Button"></NavSearchbar>
    </>
  );
}
export default Example;
```
