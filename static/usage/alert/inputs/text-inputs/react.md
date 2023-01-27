```tsx
import React from 'react';
import { NavButton, useNavAlert } from '@navify/react';

function Example() {
  const [presentAlert] = useNavAlert();

  return (
    <NavButton
      onClick={() =>
        presentAlert({
          header: 'Please enter your info',
          buttons: ['OK'],
          inputs: [
            {
              placeholder: 'Name',
            },
            {
              placeholder: 'Nickname (max 8 characters)',
              attributes: {
                maxlength: 8,
              },
            },
            {
              type: 'number',
              placeholder: 'Age',
              min: 1,
              max: 100,
            },
            {
              type: 'textarea',
              placeholder: 'A little about yourself',
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
