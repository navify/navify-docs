```tsx
import React, { useEffect, useState } from 'react';
import { NavContent, NavHeader, NavIcon, NavItem, NavLabel, NavList, NavRefresher, NavRefresherContent, NavTitle, NavToolbar, RefresherEventDetail } from '@navify/react';
import { ellipse } from 'navicons/icons';

import './main.css';

function Example() {
  const names = ['Burt Bear', 'Charlie Cheetah', 'Donald Duck', 'Eva Eagle', 'Ellie Elephant', 'Gino Giraffe', 'Isabella Iguana', 'Karl Kitten', 'Lionel Lion', 'Molly Mouse', 'Paul Puppy', 'Rachel Rabbit', 'Ted Turtle'];
  const [items, setItems] = useState<{name: string, unread: boolean}[]>([]);

  let didInit = false;

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      addItems(5);
    }
  }, []);

  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      addItems(3, true);
      event.detail.complete();
    }, 2000);
  }

  function chooseRandomName() {
    return names[Math.floor(Math.random() * names.length)];
  }

  function addItems(count: number, unread = false) {
    for (let i = 0; i < count; i++) {
      setItems((current) => [{ name: chooseRandomName(), unread }, ...current]);
    }
  }

  return (
    <>
      <NavHeader>
        <NavToolbar>
          <NavTitle>Pull to Refresh</NavTitle>
        </NavToolbar>
      </NavHeader>

      <NavContent>
        <NavRefresher slot="fixed" onNavRefresh={handleRefresh}>
          <NavRefresherContent></NavRefresherContent>
        </NavRefresher>

        <NavList>
          { items.map((item) => (
            <NavItem button={true}>
              <NavIcon slot="start" color="primary" icon={ item.unread ? ellipse : '' }></NavIcon>
              <NavLabel>
                <h2>{ item.name }</h2>
                <p>New message from { item.name }</p>
              </NavLabel>
            </NavItem>
          ))}
        </NavList>
      </NavContent>
    </>
  );
}
export default Example;
```
