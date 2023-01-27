```tsx
import React from 'react';
import { NavContent, NavItem, NavLabel, NavList, NavReorder, NavReorderGroup, ItemReorderEventDetail } from '@navify/react';

import './main.css';

function Example() {
  function handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }

  return (
    <NavContent scrollY={false}>
      <div className="nav-content-scroll-host">
        <NavList>
          {/* The reorder gesture is disabled by default, enable it to drag and drop items */}
          <NavReorderGroup disabled={false} onNavItemReorder={handleReorder}>
            <NavItem>
              <NavLabel>
                Item 1
              </NavLabel>
              <NavReorder slot="end"></NavReorder>
            </NavItem>

            <NavItem>
              <NavLabel>
                Item 2
              </NavLabel>
              <NavReorder slot="end"></NavReorder>
            </NavItem>

            <NavItem>
              <NavLabel>
                Item 3
              </NavLabel>
              <NavReorder slot="end"></NavReorder>
            </NavItem>

            <NavItem>
              <NavLabel>
                Item 4
              </NavLabel>
              <NavReorder slot="end"></NavReorder>
            </NavItem>

            <NavItem>
              <NavLabel>
                Item 5
              </NavLabel>
              <NavReorder slot="end"></NavReorder>
            </NavItem>
          </NavReorderGroup>
        </NavList>
      </div>
    </NavContent>
  );
}
export default Example;
```
