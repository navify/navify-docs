```tsx
import React, { useState } from 'react';
import { 
  NavButton,
  NavIcon,
  NavItem,
  NavLabel,
  NavList,
  NavListHeader,
  NavSkeletonText,
  NavThumbnail,
} from '@navify/react';
import { musicalNotes } from 'navicons/icons';
function Example() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {loaded && 
        <NavList>
          <NavListHeader>Albums</NavListHeader>
          <NavItem>
            <NavThumbnail slot="start">
              <NavIcon style={{ 'width': '100%', 'height': '100%' }} icon={musicalNotes}></NavIcon>
            </NavThumbnail>
            <NavLabel>
              <h3>Abbey Road</h3>
              <p>The Beatles</p>
              <p>1969</p>
            </NavLabel>
          </NavItem>
        </NavList>
      }
      {!loaded &&
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
      }
      <NavButton onClick={() => setLoaded(!loaded)}>Toggle</NavButton>
    </>
  );
}
export default Example;
```