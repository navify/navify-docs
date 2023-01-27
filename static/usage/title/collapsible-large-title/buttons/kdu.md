```html
<template>
  <nav-header :translucent="true">
    <nav-toolbar>
      <nav-title>Title</nav-title>
      <nav-buttons :collapse="true" slot="end">
        <nav-button>Button</nav-button>
      </nav-buttons>
    </nav-toolbar>
  </nav-header>
  <nav-content :fullscreen="true">
    <nav-header collapse="condense">
      <nav-toolbar>
        <nav-title size="large">Title</nav-title>
        <nav-buttons :collapse="true" slot="end">
          <nav-button>Button</nav-button>
        </nav-buttons>
      </nav-toolbar>
    </nav-header>

    <div class="nav-padding">Scroll the list to see the title & buttons collapse.</div>

    <nav-list>
      <nav-item>Item 1</nav-item>
      <nav-item>Item 2</nav-item>
      <nav-item>Item 3</nav-item>
      <nav-item>Item 4</nav-item>
      <nav-item>Item 5</nav-item>
      <nav-item>Item 6</nav-item>
      <nav-item>Item 7</nav-item>
      <nav-item>Item 8</nav-item>
      <nav-item>Item 9</nav-item>
      <nav-item>Item 10</nav-item>
      <nav-item>Item 11</nav-item>
      <nav-item>Item 12</nav-item>
      <nav-item>Item 13</nav-item>
      <nav-item>Item 14</nav-item>
      <nav-item>Item 15</nav-item>
      <nav-item>Item 16</nav-item>
      <nav-item>Item 17</nav-item>
      <nav-item>Item 18</nav-item>
      <nav-item>Item 19</nav-item>
      <nav-item>Item 20</nav-item>
    </nav-list>
  </nav-content>
</template>

<script lang="ts">
  import { NavContent, NavHeader, NavToolbar, NavTitle, NavList, NavItem, NavButtons, NavButton } from '@navify/kdu';
  import { defineComponent } from 'kdu';

  export default defineComponent({
    components: { NavContent, NavHeader, NavToolbar, NavTitle, NavList, NavItem, NavButtons, NavButton },
  });
</script>
```
