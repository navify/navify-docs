```tsx
import React, { useState } from 'react';
import { NavButton, useNavToast } from '@navify/react';

function Example() {
  const [presentToast] = useNavToast();
  const [handlerMessage, setHandlerMessage] = useState('');
  const [roleMessage, setRoleMessage] = useState('');

  return (
    <>
      <NavButton
        onClick={() => {
          presentToast({
            message: 'Hello World!',
            duration: 3000,
            onDidDismiss: (e: CustomEvent) => setRoleMessage(`Dismissed with role: ${e.detail.role}`),
            buttons: [
              {
                text: 'More Info',
                role: 'info',
                handler: () => { setHandlerMessage('More Info clicked'); }
              },
              {
                text: 'Dismiss',
                role: 'cancel',
                handler: () => { setHandlerMessage('Dismiss clicked'); }
              }
            ]
          })
        }}
      >
        Click Me
      </NavButton>
      <p>{handlerMessage}</p>
      <p>{roleMessage}</p>
    </>
  );
}
export default Example;
```
