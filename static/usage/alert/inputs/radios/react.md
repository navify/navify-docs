```tsx
import React from 'react';
import { NavButton, useNavAlert } from '@navify/react';

function Example() {
  const [presentAlert] = useNavAlert();

  return (
    <NavButton
      onClick={() =>
        presentAlert({
          header: 'Select your favorite color',
          buttons: ['OK'],
          inputs: [
            {
              label: 'Red',
              type: 'radio',
              value: 'red',
            },
            {
              label: 'Blue',
              type: 'radio',
              value: 'blue',
            },
            {
              label: 'Green',
              type: 'radio',
              value: 'green',
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
