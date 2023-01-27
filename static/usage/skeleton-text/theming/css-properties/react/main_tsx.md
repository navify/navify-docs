```tsx
import React from 'react';
import { 
  NavItem,
  NavLabel,
  NavList,
  NavListHeader,
  NavSkeletonText,
  NavThumbnail,
} from '@navify/react';

import './main.css';

function Example() {
  return (
    <NavList>
      <NavListHeader>
        <NavSkeletonText animated={true} style={{ 'width': '80px' }}></NavSkeletonText>
      </NavListHeader>
      <NavItem>
        <NavThumbnail slot="start">
          <NavSkeletonText animated={true}></NavSkeletonText>
        </NavThumbnail>
        <NavLabel>
          <h3>
            <NavSkeletonText animated={true} style={{ 'width': '80%' }}></NavSkeletonText>
          </h3>
          <p>
            <NavSkeletonText animated={true} style={{ 'width': '60%' }}></NavSkeletonText>
          </p>
          <p>
            <NavSkeletonText animated={true} style={{ 'width': '30%' }}></NavSkeletonText>
          </p>
        </NavLabel>
      </NavItem>
    </NavList>
  );
}
export default Example;
```