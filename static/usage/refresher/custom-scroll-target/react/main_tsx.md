```tsx
import React from 'react';
import { NavContent, NavHeader, NavRefresher, NavRefresherContent, NavTitle, NavToolbar, RefresherEventDetail } from '@navify/react';

import './main.css';

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

      <NavContent scrollY={false}>
        <NavRefresher slot="fixed" onNavRefresh={handleRefresh}>
          <NavRefresherContent></NavRefresherContent>
        </NavRefresher>

        <div className="nav-content-scroll-host nav-padding">
          <p>Pull this content down to trigger the refresh.</p>
        </div>
      </NavContent>
    </>
  );
}
export default Example;
```
