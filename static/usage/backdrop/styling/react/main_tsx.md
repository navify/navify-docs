```tsx
import React from 'react';
import { NavBackdrop, NavHeader, NavToolbar, NavTitle, NavContent, NavCheckbox, NavButton } from '@navify/react';

import './main.css';

function Example() {
  return (
    <>
      <NavBackdrop visible={true}></NavBackdrop>
      <div className="nav-page">
        <NavHeader>
          <NavToolbar>
            <NavTitle>Backdrop</NavTitle>
          </NavToolbar>
        </NavHeader>
        <NavContent className="nav-padding">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, cum aspernatur cupiditate nesciunt totam
            perspiciatis delectus soluta laboriosam, ullam impedit porro eaque laborum optio natus sed nostrum,
            provident expedita vero!
          </p>
        </NavContent>
      </div>
      <div id="box">
        <NavCheckbox color="light"></NavCheckbox>
        <NavButton class="nav-margin-start" color="light">
          Clickable
        </NavButton>
      </div>
    </>
  );
}
export default Example;
```
