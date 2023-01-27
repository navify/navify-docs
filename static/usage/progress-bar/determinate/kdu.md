```html
<template>
  <nav-progress-bar :value="progress"></nav-progress-bar>
</template>

<script lang="ts">
  import { NavProgressBar } from '@navify/kdu';
  import { defineComponent, ref } from 'kdu';

  export default defineComponent({
    components: { NavProgressBar },
    setup() {
      let progress = ref(0);

      return {
        progress
      };
    },
    mounted() {
      setInterval(() => {
        this.progress += 0.01;

        // Reset the progress bar when it reaches 100%
        // to continuously show the demo
        if (this.progress > 1) {
          setTimeout(() => {
            this.progress = 0;
          }, 1000);
        }
      }, 50);
    }
  });
</script>
```
