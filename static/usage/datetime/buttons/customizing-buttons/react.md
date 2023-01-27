```tsx
import React, { useRef } from 'react';
import { NavButtons, NavButton, NavDatetime } from '@navify/react';
function Example() {
  const datetime = useRef<null | HTMLNavDatetimeElement>(null);
  const reset = () => {
    datetime.current?.reset();
  }
  const cancel = () => {
    datetime.current?.cancel();
  }
  const confirm = () => {
    datetime.current?.confirm();
  }
  return (
    <NavDatetime ref={datetime}>
      <NavButtons slot="buttons">
        <NavButton color="danger" onClick={reset}>Reset</NavButton>
        <NavButton color="primary" onClick={cancel}>Never mind</NavButton>
        <NavButton color="primary" onClick={confirm}>All Set</NavButton>
      </NavButtons>
    </NavDatetime>
  );
}
export default Example;
```
