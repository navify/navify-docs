```tsx
import React, { useState } from 'react';
import { NavButton, useNavActionSheet } from '@navify/react';
import type { OverlayEventDetail } from '@navify/core';

import './main.css';

function Example() {
  const [present] = useNavActionSheet();
  const [result, setResult] = useState<OverlayEventDetail>();

  return (
    <div className="container">
      <NavButton
        onClick={() =>
          present({
            header: 'Example header',
            subHeader: 'Example subheader',
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
            onDidDismiss: ({ detail }) => setResult(detail),
          })
        }
      >
        Open
      </NavButton>
      {result && <code>{JSON.stringify(result, null, 2)}</code>}
    </div>
  );
}
export default Example;
```
