```tsx
import React from 'react';
import { NavSelect, NavSelectOption } from '@navify/react';

import './main.css';

function Example() {
  return (
    <NavSelect placeholder="Select fruit">
      <NavSelectOption value="apples">Apples</NavSelectOption>
      <NavSelectOption value="oranges">Oranges</NavSelectOption>
      <NavSelectOption value="bananas">Bananas</NavSelectOption>
    </NavSelect>
  );
}
export default Example;
```
