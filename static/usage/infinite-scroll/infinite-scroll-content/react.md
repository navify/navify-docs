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

  useEffect(() => {
    const newItems = [];
    for (let i = 1; i < 51; i++) {
      newItems.push(`Item ${items.length + i}`);
    }
    setItems([...items, ...newItems]);
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
      <NavInfiniteScroll>
        <NavInfiniteScrollContent loadingText="Please wait..." loadingSpinner="bubbles"></NavInfiniteScrollContent>
      </NavInfiniteScroll>
    </NavContent>
  );
}
export default Example;
```
