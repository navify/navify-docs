```tsx
import React from 'react';
import { NavText, NavIcon } from '@navify/react';
import { warning } from 'navicons/icons';

function Example() {
  return (
    <>
      <NavText color="primary">
        <h1>H1: The quick brown fox jumps over the lazy dog</h1>
      </NavText>

      <NavText color="secondary">
        <h2>H2: The quick brown fox jumps over the lazy dog</h2>
      </NavText>

      <NavText color="tertiary">
        <h3>H3: The quick brown fox jumps over the lazy dog</h3>
      </NavText>

      <p>
        <NavText color="warning"><NavIcon icon={warning}></NavIcon></NavText>
        I saw a werewolf with a Chinese menu in his hand.
        Walking through the <NavText color="success"><sub>streets</sub></NavText> of Soho in the rain.
        He <NavText color="medium"><i>was</i></NavText> looking for a place called Lee Ho Fook's.
        Gonna get a <NavText color="danger">big dish of beef chow mein.</NavText>
      </p>
    </>
  );
}
export default Example;
```
