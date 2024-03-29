```html
<template>
  <nav-button @click="openPicker()">Open</nav-button>
</template>

<script>
  import { NavButton, pickerController } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavButton },
    data() {
      return {
        message: '',
      };
    },
    methods: {
      async openPicker() {
        const picker = await pickerController.create({
          columns: [
            {
              name: 'languages',
              options: [
                {
                  text: 'JavaScript',
                  value: 'javascript',
                },
                {
                  text: 'TypeScript',
                  value: 'typescript',
                },
                {
                  text: 'Rust',
                  value: 'rust',
                },
                {
                  text: 'C#',
                  value: 'c#',
                },
              ],
            },
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'Confirm',
              handler: (value) => {
                window.alert(`You selected: ${value.languages.value}`);
              },
            },
          ],
        });
        await picker.present();
      },
    },
  });
</script>
```
