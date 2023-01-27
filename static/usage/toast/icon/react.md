```tsx
import React from 'react';
import { NavButton, useNavToast } from '@navify/react';
import { globe } from 'navicons/icons';

function Example() {
  const [presentToast] = useNavToast();

  return (
    <NavButton
      onClick={() => {
        presentToast({
          message: 'Hello World!',
          duration: 1500,
          icon: globe
        })
      }}
    >
      Click Me
    </NavButton>
  );
}
export default Example;
```
