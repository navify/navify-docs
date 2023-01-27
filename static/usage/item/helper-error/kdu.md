```html
<template>
  <nav-item fill="solid" ref="item">
    <nav-label position="floating">Email</nav-label>
    <nav-input type="email" @navInput="validate" @navBlur="markTouched"></nav-input>
    <nav-note slot="helper">Enter a valid email</nav-note>
    <nav-note slot="error">Invalid email</nav-note>
  </nav-item>
</template>

<script lang="ts">
  import { NavInput, NavItem, NavLabel, NavNote } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavInput, NavItem, NavLabel, NavNote },
    methods: {
      validateEmail(email) {
        return email.match(/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
      },

      validate(ev) {
        const value = ev.target.value;

        this.$refs.item.$el.classList.remove('nav-valid');
        this.$refs.item.$el.classList.remove('nav-invalid');

        if (value === '') return;

        this.validateEmail(value)
          ? this.$refs.item.$el.classList.add('nav-valid')
          : this.$refs.item.$el.classList.add('nav-invalid');
      },

      markTouched() {
        this.$refs.item.$el.classList.add('nav-touched')
      }
    },
  });
</script>
```
