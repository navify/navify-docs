```tsx
import React from 'react';
import { NavItem, NavTextarea } from '@navify/react';
function Example() {
  return (
    <NavItem>
      <NavTextarea
        placeholder="Type something here"
        autoGrow={true}
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus sem, auctor accumsan egestas sed, venenatis at ex. Nam consequat ex odio, suscipit rhoncus orci dictum eget. Aenean sit amet ligula varius felis facilisis lacinia nec volutpat nulla. Duis ullamcorper sit amet turpis sed blandit. Integer pretium massa eu faucibus interdum."
      ></NavTextarea>
    </NavItem>
  );
}
export default Example;
```
