```tsx
import React, { useState } from 'react';
import { NavInput, NavItem, NavLabel, NavNote } from '@navify/react';

function Example() {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === '') return;

    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  return (
    <NavItem fill="solid" className={`${isValid && 'nav-valid'} ${isValid === false && 'nav-invalid'} ${isTouched && 'nav-touched'}`}>
      <NavLabel position="floating">Email</NavLabel>
      <NavInput type="email" onNavInput={(event) => validate(event)} onNavBlur={() => markTouched()}></NavInput>
      <NavNote slot="helper">Enter a valid email</NavNote>
      <NavNote slot="error">Invalid email</NavNote>
    </NavItem>
  );
}
export default Example;
```
