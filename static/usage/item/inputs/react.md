```tsx
import React from 'react';
import { NavCheckbox, NavInput, NavItem, NavLabel, NavRange, NavSelect, NavSelectOption, NavToggle } from '@navify/react';

function Example() {
  return (
    <>
      <NavItem>
        <NavLabel>Default Input</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel position="fixed">Fixed Input</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel position="stacked">Stacked Input</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel position="floating">Floating Input</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>

      <NavItem fill="outline">
        <NavLabel position="floating">Floating Input: Outline (MD only)</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>

      <NavItem fill="solid">
        <NavLabel position="floating">Floating Input: Solid (MD only)</NavLabel>
        <NavInput placeholder="Enter text"></NavInput>
      </NavItem>

      <NavItem>
        <NavLabel>Select</NavLabel>
        <NavSelect placeholder="Make a Selection">
          <NavSelectOption value="">No Game Console</NavSelectOption>
          <NavSelectOption value="nes">NES</NavSelectOption>
          <NavSelectOption value="n64">Nintendo64</NavSelectOption>
          <NavSelectOption value="ps">PlayStation</NavSelectOption>
          <NavSelectOption value="genesis">Sega Genesis</NavSelectOption>
          <NavSelectOption value="saturn">Sega Saturn</NavSelectOption>
          <NavSelectOption value="snes">SNES</NavSelectOption>
        </NavSelect>
      </NavItem>

      <NavItem>
        <NavLabel>Toggle</NavLabel>
        <NavToggle slot="end"></NavToggle>
      </NavItem>

      <NavItem>
        <NavLabel>Checkbox</NavLabel>
        <NavCheckbox slot="end"></NavCheckbox>
      </NavItem>

      <NavItem>
        <NavLabel position="stacked">Range</NavLabel>
        <NavRange></NavRange>
      </NavItem>
    </>
  );
}
export default Example;
```
