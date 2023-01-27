```html
<template>
  <nav-datetime :is-date-enabled="isWeekday"></nav-datetime>
</template>

<script lang="ts">
  import { NavDatetime } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavDatetime },
    setup() {
      const isWeekday = (dateString: string) => {
        const date = new Date(dateString);
        const utcDay = date.getUTCDay();
        
        /**
         * Date will be enabled if it is not
         * Sunday or Saturday
         */
        return utcDay !== 0 && utcDay !== 6;
      }
      
      return { isWeekday }
    }
  });
</script>
```
