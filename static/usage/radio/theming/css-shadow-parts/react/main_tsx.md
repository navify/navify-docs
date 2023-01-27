```tsx
import React from 'react';
import { NavRadio, NavRadioGroup } from '@navify/react';

import './main.css';

function Example() {
  return (
    <NavRadioGroup value="custom-checked">
      <NavRadio value="custom"></NavRadio>
      <NavRadio value="custom-checked"></NavRadio>
    </NavRadioGroup>
  );
}
export default Example;
```
