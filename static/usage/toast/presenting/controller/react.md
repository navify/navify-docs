```tsx
import React from 'react';
import { NavButton, useNavToast } from '@navify/react';

function Example() {
  const [present] = useNavToast();

  const presentToast = (position: 'top' | 'middle' | 'bottom') => {
    present({
      message: 'Hello World!',
      duration: 1500,
      position: position
    });
  };

  return (
    <>
      <NavButton expand="block" onClick={() => presentToast('top')}>Present Toast At the Top</NavButton>
      <NavButton expand="block" onClick={() => presentToast('middle')}>Present Toast At the Middle</NavButton>
      <NavButton expand="block" onClick={() => presentToast('bottom')}>Present Toast At the Bottom</NavButton>
    </>
  );
}
export default Example;
```
