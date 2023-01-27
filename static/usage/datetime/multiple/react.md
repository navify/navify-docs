```tsx
import React, { useRef, useEffect } from 'react';
import { NavDatetime } from '@navify/react';

function Example() {
  const datetime = useRef<null | HTMLNavDatetimeElement>(null);

  useEffect(() => {
    if(!datetime.current) return;
    datetime.current.value = ['2022-06-03', '2022-06-13', '2022-06-29'];
  }, []);

  return <NavDatetime
    ref={datetime}
    presentation="date"
    multiple={true}
  ></NavDatetime>;
}
export default Example;
```
