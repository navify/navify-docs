```html
<template>
  <nav-list>
    <nav-item>
      <nav-select
        placeholder="Select fruit"
        :compareWith="compareWith"
        @navChange="currentFood = JSON.stringify($event.detail.value)"
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
  import { NavLabel, NavSelect, NavSelectOption } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavLabel, NavSelect, NavSelectOption },
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
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
      }
    }
  });
</script>
```
