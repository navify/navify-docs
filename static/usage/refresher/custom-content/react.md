```tsx
import React from 'react';
import { NavContent, NavHeader, NavRefresher, NavRefresherContent, NavTitle, NavToolbar, RefresherEventDetail } from '@navify/react';
import { chevronDownCircleOutline } from 'navicons/icons';

function Example() {

  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      // Any calls to load data go here
      event.detail.complete();
    }, 2000);
  }

  return (
    <>
      <NavHeader>
        <NavToolbar>
          <NavTitle>Pull to Refresh</NavTitle>
        </NavToolbar>
      </NavHeader>

      <NavContent className="nav-padding">
        <NavRefresher slot="fixed" onNavRefresh={handleRefresh}>
          <NavRefresherContent
            pullingIcon={chevronDownCircleOutline}
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing...">
          </NavRefresherContent>
        </NavRefresher>

        <p>Pull this content down to trigger the refresh.</p>
      </NavContent>
    </>
  );
}
export default Example;
```
