```tsx
import React from 'react';
import { NavButton, useNavActionSheet } from '@navify/react';

import './main.css';

function Example() {
  const [present] = useNavActionSheet();

  return (
    <NavButton
      onClick={() =>
        present({
          header: 'Example header',
          subHeader: 'Example subheader',
          cssClass: 'my-custom-class',
          buttons: [
            {
              text: 'Delete',
              role: 'destructive',
              data: {
                action: 'delete',
              },
            },
            {
              text: 'Share',
              data: {
                action: 'share',
              },
            },
            {
              text: 'Cancel',
              role: 'cancel',
              data: {
                action: 'cancel',
              },
            },
          ],
        })
      }
    >
      Open
    </NavButton>
  );
}
export default Example;
```
