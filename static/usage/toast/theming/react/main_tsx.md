```tsx
import React from 'react';
import { NavButton, useNavToast } from '@navify/react';

import './main.css';

function Example() {
  const [presentToast] = useNavToast();

  return (
    <NavButton
      onClick={() =>
        presentToast({
          message: 'Hello Styled World!',
          duration: 3000,
          cssClass: 'custom-toast',
          buttons: [
            {
              text: 'Dismiss',
              role: 'cancel'
            }
          ],
        })
      }
    >
      Click Me
    </NavButton>
  );
}
export default Example;
```
