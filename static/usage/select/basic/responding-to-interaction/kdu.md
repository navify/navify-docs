```html
<template>
  <nav-list>
    <nav-item>
      <nav-select
        placeholder="Select fruit"
        @navChange="pushLog('navChange fired with value: ' + $event.detail.value)"
        @navCancel="pushLog('navCancel fired')"
        @navDismiss="pushLog('navDismiss fired')"
      >
        <nav-select-option value="apples">Apples</nav-select-option>
        <nav-select-option value="oranges">Oranges</nav-select-option>
        <nav-select-option value="bananas">Bananas</nav-select-option>
      </nav-select>
    </nav-item>
  </nav-list>
  <div class="nav-padding">
    <p k-for="log in logs">{{ log }}</p>
  </div>
</template>

<script>
  import { NavItem, NavList, NavSelect, NavSelectOption } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavItem, NavList, NavSelect, NavSelectOption },
    data() {
      return {
        logs: []
      }
    },
    methods: {
      pushLog(msg) {
        this.logs.unshift(msg);
      }
    }
  });
</script>
```
