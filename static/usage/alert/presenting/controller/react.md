```tsx
import React from 'react';
import { NavButton, useNavAlert } from '@navify/react';

function Example() {
  const [presentAlert] = useNavAlert();

  return (
    <NavButton
      onClick={() =>
        presentAlert({
          header: 'Alert',
          subHeader: 'Important message',
          message: 'This is an alert!',
          buttons: ['OK'],
        })
      }
    >
      Click Me
    </NavButton>
  );
}
export default Example;
```
