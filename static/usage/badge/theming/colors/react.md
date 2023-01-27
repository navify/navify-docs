```tsx
import React from 'react';
import { NavBadge, NavItem, NavLabel, NavList } from '@navify/react';
function Example() {
  return (
    <NavList>
      <NavItem>
        <NavLabel>Followers</NavLabel>
        <NavBadge color="primary">22k</NavBadge>
      </NavItem>
      <NavItem>
        <NavLabel>Likes</NavLabel>
        <NavBadge color="secondary">118k</NavBadge>
      </NavItem>
      <NavItem>
        <NavLabel>Stars</NavLabel>
        <NavBadge color="tertiary">34k</NavBadge>
      </NavItem>
      <NavItem>
        <NavLabel>Completed</NavLabel>
        <NavBadge color="success">80</NavBadge>
      </NavItem>
      <NavItem>
        <NavLabel>Warnings</NavLabel>
        <NavBadge color="warning">70</NavBadge>
      </NavItem>
      <NavItem>
        <NavLabel>Notifications</NavLabel>
        <NavBadge color="danger">1000</NavBadge>
      </NavItem>
    </NavList>
  );
}
export default Example;
```
