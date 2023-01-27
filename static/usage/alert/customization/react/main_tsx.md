```tsx
import React from 'react';
import { NavButton, useNavAlert } from '@navify/react';

import './main.css';

function Example() {
  const [presentAlert] = useNavAlert();

  return (
    <NavButton
      onClick={() =>
        presentAlert({
          header: 'Are you sure?',
          cssClass: 'custom-alert',
          buttons: [
            {
              text: 'No',
              cssClass: 'alert-button-cancel',
            },
            {
              text: 'Yes',
              cssClass: 'alert-button-confirm',
            },
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
