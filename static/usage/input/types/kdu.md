```html
<template>
  <nav-list>
    <nav-item>
      <nav-label>Text input</nav-label>
      <nav-input placeholder="Enter text"></nav-input>
    </nav-item>

    <nav-item>
      <nav-label>Number input</nav-label>
      <nav-input type="number" placeholder="000"></nav-input>
    </nav-item>

    <nav-item>
      <nav-label>Password input</nav-label>
      <nav-input type="password" value="password"></nav-input>
    </nav-item>

    <nav-item>
      <nav-label>Email input</nav-label>
      <nav-input type="email" placeholder="email@domain.com"></nav-input>
    </nav-item>

    <nav-item>
      <nav-label>Telephone input</nav-label>
      <nav-input type="tel" placeholder="888-888-8888"></nav-input>
    </nav-item>
  </nav-list>
</template>

<script lang="ts">
  import { NavInput, NavItem, NavLabel, NavList } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavInput, NavItem, NavLabel, NavList },
  });
</script>
```
