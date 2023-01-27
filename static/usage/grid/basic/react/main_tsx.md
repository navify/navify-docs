```tsx
import React from 'react';
import { NavCol, NavGrid, NavRow } from '@navify/react';

import './main.css';

function Example() {
  return (
    <>
      <NavGrid>
        <NavRow>
          <NavCol>1</NavCol>
          <NavCol>2</NavCol>
          <NavCol>3</NavCol>
        </NavRow>
      </NavGrid>

      <NavGrid>
        <NavRow>
          <NavCol>1</NavCol>
          <NavCol>2</NavCol>
          <NavCol>3</NavCol>
          <NavCol>4</NavCol>
          <NavCol>5</NavCol>
          <NavCol>6</NavCol>
        </NavRow>
      </NavGrid>

      <NavGrid>
        <NavRow>
          <NavCol>1</NavCol>
          <NavCol>2</NavCol>
          <NavCol>3</NavCol>
          <NavCol>4</NavCol>
          <NavCol>5</NavCol>
          <NavCol>6</NavCol>
          <NavCol>7</NavCol>
          <NavCol>8</NavCol>
          <NavCol>9</NavCol>
          <NavCol>10</NavCol>
          <NavCol>11</NavCol>
          <NavCol>12</NavCol>
        </NavRow>
      </NavGrid>
    </>
  );
}
export default Example;
```
