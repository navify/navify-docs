```html
<template>
  <nav-datetime ref="datetime">
    <nav-buttons slot="buttons">
      <nav-button color="danger" @click="reset()">Reset</nav-button>
      <nav-button color="primary" @click="cancel()">Never mind</nav-button>
      <nav-button color="primary" @click="confirm()">All Set</nav-button>
    </nav-buttons>
  </nav-datetime>
</template>

<script lang="ts">
  import { NavButtons, NavButton, NavDatetime } from '@navify/kdu';
  import { defineComponent, ref } from 'kdu';

  export default defineComponent({
    components: { NavButtons, NavButton, NavDatetime },
    setup() {
      const datetime = ref();
      const reset = () => datetime.value.$el.reset();
      const cancel = () => datetime.value.$el.cancel();
      const confirm = () => datetime.value.$el.confirm();
      return { datetime, reset, cancel, confirm }
    }
  });
</script>
```
