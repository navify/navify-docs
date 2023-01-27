```tsx
import React from 'react';
import { NavLabel, NavListHeader } from '@navify/react';

function Example() {
  return (
    <>
      <NavListHeader>
        <NavLabel>Default</NavLabel>
      </NavListHeader>
      <NavListHeader color="primary">
        <NavLabel>Primary</NavLabel>
      </NavListHeader>
      <NavListHeader color="secondary">
        <NavLabel>Secondary</NavLabel>
      </NavListHeader>
      <NavListHeader color="tertiary">
        <NavLabel>Tertiary</NavLabel>
      </NavListHeader>
      <NavListHeader color="success">
        <NavLabel>Success</NavLabel>
      </NavListHeader>
      <NavListHeader color="warning">
        <NavLabel>Warning</NavLabel>
      </NavListHeader>
      <NavListHeader color="danger">
        <NavLabel>Danger</NavLabel>
      </NavListHeader>
      <NavListHeader color="light">
        <NavLabel>Light</NavLabel>
      </NavListHeader>
      <NavListHeader color="medium">
        <NavLabel>Medium</NavLabel>
      </NavListHeader>
      <NavListHeader color="dark">
        <NavLabel>Dark</NavLabel>
      </NavListHeader>
    </>
  );
}
export default Example;
```
