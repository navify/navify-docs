```tsx
import React from 'react';
import { NavButton, useNavLoading } from '@navify/react';

import './main.css';

function Example() {
  
  /**
   * This example does not make use of the dismiss
   * method returned from `useNavLoading`, but it can
   * be used for more complex scenarios.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [present, dismiss] = useNavLoading();
  return (
    <NavButton onClick={() => {
      present({
        message: 'Loading...',
        duration: 3000,
        cssClass: 'custom-loading'
      })
    }}>
      Show Loading
    </NavButton>
  );
}
export default Example;
```
