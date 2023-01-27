```tsx
import React, { useState } from 'react';
import { NavButton, NavContent, useNavPopover } from '@navify/react';

const Popover = () => <NavContent className="nav-padding">Hello World!</NavContent>;

function Example() {
  const [present, dismiss] = useNavPopover(Popover, {
    onDismiss: (data: any, role: string) => dismiss(data, role),
  });
  const [roleMsg, setRoleMsg] = useState('');

  return (
    <>
      <NavButton
        onClick={(e: any) =>
          present({
            event: e,
            onDidDismiss: (e: CustomEvent) => setRoleMsg(`Popover dismissed with role: ${e.detail.role}`),
          })
        }
      >
        Click Me
      </NavButton>
      <p>{roleMsg}</p>
    </>
  );
}
export default Example;
```
