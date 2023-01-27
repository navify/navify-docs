```tsx
import React from 'react';
import { NavDatetime, NavDatetimeButton, NavModal } from '@navify/react';
function Example() {
  return (
    <>
      <NavDatetimeButton datetime="datetime"></NavDatetimeButton>
      
      <NavModal keepContentsMounted={true}>
        <NavDatetime id="datetime"></NavDatetime>
      </NavModal>
    </>
  );
}
export default Example;
```
