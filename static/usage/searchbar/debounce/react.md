```tsx
import React, { useState } from 'react';
import { NavItem, NavList, NavSearchbar } from '@navify/react';

function Example() {
  const data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  let [results, setResults] = useState([...data]);

  const handleChange = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLNavSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setResults(data.filter(d => d.toLowerCase().indexOf(query) > -1));
  }

  return (
    <>
      <NavSearchbar debounce={1000} onNavChange={(ev) => handleChange(ev)}></NavSearchbar>

      <NavList>
        { results.map(result => (
          <NavItem>{ result }</NavItem>
        ))}
      </NavList>
    </>
  );
}
export default Example;
```
