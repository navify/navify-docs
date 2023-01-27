```tsx
import React, { useState } from 'react';
import { NavItem, NavList, NavSelect, NavSelectOption } from '@navify/react';

function Example() {
  const [logs, setLogs] = useState<string[]>([]);

  const pushLog = (msg: string) => {
    setLogs([msg, ...logs]);
  };

  return (
    <>
      <NavList>
        <NavItem>
          <NavSelect
            placeholder="Select fruit"
            onNavChange={(e) => pushLog(`navChange fired with value: ${e.detail.value}`)}
            onNavCancel={() => pushLog('navCancel fired')}
            onNavDismiss={() => pushLog('navDismiss fired')}
          >
            <NavSelectOption value="apples">Apples</NavSelectOption>
            <NavSelectOption value="oranges">Oranges</NavSelectOption>
            <NavSelectOption value="bananas">Bananas</NavSelectOption>
          </NavSelect>
        </NavItem>
      </NavList>
      <div className="nav-padding">
        {logs.map((log) => (
          <p>{log}</p>
        ))}
      </div>
    </>
  );
}

export default Example;
```
