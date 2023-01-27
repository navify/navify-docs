```tsx
import React from 'react';
import { NavSearchbar } from '@navify/react';
import { searchCircle } from 'navicons/icons';

function Example() {
  return (
    <>
      <NavSearchbar></NavSearchbar>
      <NavSearchbar searchIcon={searchCircle} placeholder="Custom Search Icon"></NavSearchbar>
    </>
  );
}
export default Example;
```
