```html
<template>
  <nav-list>
    <nav-item>
      <nav-select
        placeholder="Select food"
        :compareWith="compareWith"
        @navChange="currentFood = JSON.stringify($event.detail.value)"
        :multiple="true"
      >
        <nav-select-option k-for="food in foods" :value="food">{{ food.name }}</nav-select-option>
      </nav-select>
    </nav-item>
    <nav-item lines="none">
      <nav-label>Current value: {{ currentFood }}</nav-label>
    </nav-item>
  </nav-list>
</template>

<script>
  import { NavItem, NavList, NavLabel, NavSelect, NavSelectOption } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavList, NavLabel, NavSelect, NavSelectOption },
    data() {
      return {
        currentFood: "",
        foods: [
          {
            id: 1,
            name: "Apples",
            type: "fruit"
          },
          {
            id: 2,
            name: "Carrots",
            type: "vegetable"
          },
          {
            id: 3,
            name: "Cupcakes",
            type: "dessert"
          }
        ]
      }
    },
    methods: {
      compareWith(o1, o2) {
        if(!o1 || !o2) {
          return o1 === o2;
        }

        if(Array.isArray(o2)) {
          return o2.some((o) => o.id === o1.id);
        }

        return o1.id === o2.id;
      }
    }
  });
</script>
```
