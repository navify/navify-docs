```tsx
import React, { useState, useEffect } from 'react';
import {
  NavContent,
  NavInfiniteScroll,
  NavInfiniteScrollContent,
  NavList,
  NavItem,
  NavAvatar,
  NavLabel,
} from '@navify/react';

function Example() {
  const [items, setItems] = useState<string[]>([]);

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 50; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    generateItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavContent>
      <NavList>
        {items.map((item, index) => (
          <NavItem key={item}>
            <NavAvatar slot="start">
              <img src={'https://picsum.photos/80/80?random=' + index} alt="avatar" />
            </NavAvatar>
            <NavLabel>{item}</NavLabel>
          </NavItem>
        ))}
      </NavList>
      <NavInfiniteScroll
        onNavInfinite={(ev) => {
          generateItems();
          setTimeout(() => ev.target.complete(), 500);
        }}
      >
        <NavInfiniteScrollContent></NavInfiniteScrollContent>
      </NavInfiniteScroll>
    </NavContent>
  );
}
export default Example;
```
