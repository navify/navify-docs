```tsx
import React from 'react';
import { NavRadio, NavRadioGroup } from '@navify/react';

function Example() {
  return (
    <>
      <NavRadioGroup value="primary">
        <NavRadio color="primary" value="primary"></NavRadio>
      </NavRadioGroup>
      <NavRadioGroup value="secondary">
        <NavRadio color="secondary" value="secondary"></NavRadio>
      </NavRadioGroup>
      <NavRadioGroup value="tertiary">
        <NavRadio color="tertiary" value="tertiary"></NavRadio>
      </NavRadioGroup>
      <NavRadioGroup value="success">
        <NavRadio color="success" value="success"></NavRadio>
      </NavRadioGroup>
      <NavRadioGroup value="warning">
        <NavRadio color="warning" value="warning"></NavRadio>
      </NavRadioGroup>
      <NavRadioGroup value="danger">
        <NavRadio color="danger" value="danger"></NavRadio>
      </NavRadioGroup>
      <NavRadioGroup value="light">
        <NavRadio color="light" value="light"></NavRadio>
      </NavRadioGroup>
      <NavRadioGroup value="medium">
        <NavRadio color="medium" value="medium"></NavRadio>
      </NavRadioGroup>
      <NavRadioGroup value="dark">
        <NavRadio color="dark" value="dark"></NavRadio>
      </NavRadioGroup>
    </>
  );
}
export default Example;
```
