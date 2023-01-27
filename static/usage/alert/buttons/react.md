```tsx
import React, { useState } from 'react';
import { NavButton, useNavAlert } from '@navify/react';

function Example() {
  const [presentAlert] = useNavAlert();
  const [handlerMessage, setHandlerMessage] = useState('');
  const [roleMessage, setRoleMessage] = useState('');

  return (
    <>
      <NavButton
        onClick={() =>
          presentAlert({
            header: 'Alert!',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  setHandlerMessage('Alert canceled');
                },
              },
              {
                text: 'OK',
                role: 'confirm',
                handler: () => {
                  setHandlerMessage('Alert confirmed');
                },
              },
            ],
            onDidDismiss: (e: CustomEvent) => setRoleMessage(`Dismissed with role: ${e.detail.role}`),
          })
        }
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
