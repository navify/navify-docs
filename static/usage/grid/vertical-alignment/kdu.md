```html
<template>
  <b>Columns aligned at the top</b>
  <nav-grid>
    <nav-row class="nav-align-items-start">
      <nav-col>
        1
      </nav-col>
      <nav-col>
        2
      </nav-col>
      <nav-col>
        3
      </nav-col>
      <nav-col>
        4 <br />
        # <br />
        # <br />
        # <br />
      </nav-col>
    </nav-row>
  </nav-grid>

  <b>Columns aligned at the center</b>
  <nav-grid>
    <nav-row class="nav-align-items-center">
      <nav-col>
        1
      </nav-col>
      <nav-col>
        2
      </nav-col>
      <nav-col>
        3
      </nav-col>
      <nav-col>
        4 <br />
        # <br />
        # <br />
        # <br />
      </nav-col>
    </nav-row>
  </nav-grid>

  <b>Columns aligned at the bottom</b>
  <nav-grid>
    <nav-row class="nav-align-items-end">
      <nav-col>
        1
      </nav-col>
      <nav-col>
        2
      </nav-col>
      <nav-col>
        3
      </nav-col>
      <nav-col>
        4 <br />
        # <br />
        # <br />
        # <br />
      </nav-col>
    </nav-row>
  </nav-grid>
</template>

<script lang="ts">
  import { NavCol, NavGrid, NavRow } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavCol, NavGrid, NavRow },
  });
</script>

<style scoped>
  nav-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>
```
