---
sidebar_label: Performance
---

# Kdu Performance

## k-for with Navify Components

When using `k-for` with Navify components, we recommend using Kdu's `key` attribute. This allows Kdu to re-render loop elements in an efficient way by only updating the content inside of the component rather than re-creating the component altogether.

By using `key` you can provide a stable identity for each loop element so Kdu can track insertions and deletions within the iterator. Below is an example of how to use `key`:

```html
<template>
  <nav-page>
    <nav-content>
      <nav-item k-for="item of items" :key="item.id">
        <nav-label>{{ item.value }}</nav-label>
      </nav-item>
    </nav-content>
  </nav-page>
</template>

<script>
  import { NavContent, NavItem, NavLabel, NavPage } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: {
      NavContent,
      NavItem,
      NavLabel,
      NavPage
    },
    setup() {
      const items = ref([
        { id: 0, value: 'Item 0' },
        { id: 1, value: 'Item 1' },
        ...
      ]);

      return { items }
    }
  });
</script>
```

In this example, we have an array of objects called `items`. Each object contains a `value` and an `id`. Using the `key` attribute, we pass the `item.id` for each object. This `id` is used to provide a stable identity for each loop element.

For more information on how Kdu manages state with `k-for` see https://kdu-js.web.app/guide/essentials/list.html
