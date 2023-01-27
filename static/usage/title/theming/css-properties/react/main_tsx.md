```tsx
import React from 'react';
import { NavContent, NavHeader, NavToolbar, NavTitle, NavList, NavItem } from '@navify/react';

import './main.css';

function Example() {
  return (
    <>
      <NavHeader translucent={true}>
        <NavToolbar>
          <NavTitle>Title</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent fullscreen={true}>
        <NavHeader collapse="condense">
          <NavToolbar>
            <NavTitle size="large">Title</NavTitle>
          </NavToolbar>
        </NavHeader>

        <NavList>
          <NavItem>Item 1</NavItem>
          <NavItem>Item 2</NavItem>
          <NavItem>Item 3</NavItem>
          <NavItem>Item 4</NavItem>
          <NavItem>Item 5</NavItem>
          <NavItem>Item 6</NavItem>
          <NavItem>Item 7</NavItem>
          <NavItem>Item 8</NavItem>
          <NavItem>Item 9</NavItem>
          <NavItem>Item 10</NavItem>
          <NavItem>Item 11</NavItem>
          <NavItem>Item 12</NavItem>
          <NavItem>Item 13</NavItem>
          <NavItem>Item 14</NavItem>
          <NavItem>Item 15</NavItem>
          <NavItem>Item 16</NavItem>
          <NavItem>Item 17</NavItem>
          <NavItem>Item 18</NavItem>
          <NavItem>Item 19</NavItem>
          <NavItem>Item 20</NavItem>
        </NavList>
      </NavContent>
    </>
  );
}
export default Example;
```
