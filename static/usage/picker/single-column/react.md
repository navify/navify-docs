```tsx
import React from 'react';
import { NavButton, useNavPicker } from '@navify/react';

function Example() {
  const [present] = useNavPicker();

  const openPicker = async () => {
    present({
      columns: [
        {
          name: 'languages',
          options: [
            {
              text: 'JavaScript',
              value: 'javascript',
            },
            {
              text: 'TypeScript',
              value: 'typescript',
            },
            {
              text: 'Rust',
              value: 'rust',
            },
            {
              text: 'C#',
              value: 'c#',
            },
          ],
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: (value) => {
            window.alert(`You selected: ${value.languages.value}`);
          },
        },
      ],
    });
  };

  return <NavButton onClick={openPicker}>Open</NavButton>;
}

export default Example;
```
