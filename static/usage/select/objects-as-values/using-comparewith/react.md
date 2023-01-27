```tsx
import React, { useState } from 'react';
import { NavItem, NavList, NavLabel, NavSelect, NavSelectOption } from '@navify/react';

interface Food {
  id: number;
  name: string;
  type: string;
}

const foods: Food[] = [
  {
    id: 1,
    name: 'Apples',
    type: 'fruit',
  },
  {
    id: 2,
    name: 'Carrots',
    type: 'vegetable',
  },
  {
    id: 3,
    name: 'Cupcakes',
    type: 'dessert',
  },
];

const compareWith = (o1: Food, o2: Food) => {
  return o1 && o2 ? o1.id === o2.id : o1 === o2;
};

function Example() {
  const [currentFood, setCurrentFood] = useState('');

  return (
    <NavList>
      <NavItem>
        <NavSelect
          placeholder="Select food"
          compareWith={compareWith}
          onNavChange={(ev) => setCurrentFood(JSON.stringify(ev.detail.value))}
        >
          {foods.map((food) => (
            <NavSelectOption key={food.id} value={food}>
              {food.name}
            </NavSelectOption>
          ))}
        </NavSelect>
      </NavItem>
      <NavItem lines="none">
        <NavLabel>Current food: {currentFood}</NavLabel>
      </NavItem>
    </NavList>
  );
}
export default Example;
```
