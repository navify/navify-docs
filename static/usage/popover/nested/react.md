```tsx
import React from 'react';
import { NavButton, NavContent, NavItem, NavList, NavPopover } from '@navify/react';
function Example() {
  return (
    <>
      <NavButton id="popover-button">Open Menu</NavButton>
      <NavPopover trigger="popover-button" dismissOnSelect={true}>
        <NavContent>
          <NavList>
            <NavItem button={true} detail={false}>
              Option 1
            </NavItem>
            <NavItem button={true} detail={false}>
              Option 2
            </NavItem>
            <NavItem button={true} id="nested-trigger">
              More options...
            </NavItem>

            <NavPopover trigger="nested-trigger" dismissOnSelect={true} side="end">
              <NavContent>
                <NavList>
                  <NavItem button={true} detail={false}>
                    Nested option
                  </NavItem>
                </NavList>
              </NavContent>
            </NavPopover>
          </NavList>
        </NavContent>
      </NavPopover>
    </>
  );
}
export default Example;
```
