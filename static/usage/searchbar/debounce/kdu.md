```html
<template>
  <nav-searchbar :debounce="1000" @navChange="handleChange($event)"></nav-searchbar>

  <nav-list>
    <nav-item k-for="result in results">
      <nav-label>{{ result }}</nav-label>
    </nav-item>
  </nav-list>
</template>

<script lang="ts">
  import { NavItem, NavList, NavSearchbar } from '@navify/kdu';
  import { defineComponent, ref } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavList, NavSearchbar },
    setup() {
      const data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
      const results = ref(data);

      return { data, results };
    },
    methods: {
      handleChange(event) {
        const query = event.target.value.toLowerCase();
        this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
      },
    },
  });
</script>
```
