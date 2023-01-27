```tsx
import React from 'react';
import { NavSearchbar } from '@navify/react';

function Example() {
  return (
    <>
      <NavSearchbar></NavSearchbar>
      <NavSearchbar placeholder="Custom Placeholder"></NavSearchbar>
      <NavSearchbar disabled={true} placeholder="Disabled"></NavSearchbar>
      <NavSearchbar value="Value"></NavSearchbar>
      <NavSearchbar animated={true} placeholder="Animated"></NavSearchbar>
    </>
  );
}
export default Example;
```
