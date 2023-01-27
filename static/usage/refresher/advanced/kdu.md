```html
<template>
  <nav-header>
    <nav-toolbar>
      <nav-title>Pull to Refresh</nav-title>
    </nav-toolbar>
  </nav-header>

  <nav-content>
    <nav-refresher slot="fixed" @navRefresh="handleRefresh($event)">
      <nav-refresher-content></nav-refresher-content>
    </nav-refresher>

    <nav-list>
      <nav-item :button="true" k-for="item in items">
        <nav-icon slot="start" color="primary" :icon="item.unread ? ellipse : ''"></nav-icon>
        <nav-label>
          <h2>{{ item.name }}</h2>
          <p>New message from {{ item.name }}</p>
        </nav-label>
      </nav-item>
    </nav-list>
  </nav-content>
</template>

<script lang="ts">
  import { NavContent, NavHeader, NavIcon, NavItem, NavLabel, NavList, NavRefresher, NavRefresherContent, NavTitle, NavToolbar } from '@navify/kdu';
  import { defineComponent, ref } from 'kdu';
  import { ellipse } from 'navicons/icons';

  export default defineComponent({
    components: { NavContent, NavHeader, NavIcon, NavItem, NavLabel, NavList, NavRefresher, NavRefresherContent, NavTitle, NavToolbar },
    setup() {
      const names = ['Burt Bear', 'Charlie Cheetah', 'Donald Duck', 'Eva Eagle', 'Ellie Elephant', 'Gino Giraffe', 'Isabella Iguana', 'Karl Kitten', 'Lionel Lion', 'Molly Mouse', 'Paul Puppy', 'Rachel Rabbit', 'Ted Turtle'];
      let items = ref([]);

      const chooseRandomName = () => {
        return names[Math.floor(Math.random() * names.length)];
      };

      const addItems = (count, unread = false) => {
        for (let i = 0; i < count; i++) {
          items.value.unshift({name: chooseRandomName(), unread});
        }
      };

      addItems(5);

      const handleRefresh = (event: CustomEvent) => {
        setTimeout(() => {
          addItems(3, true);
          event.target.complete();
        }, 2000);
      };

      return { ellipse, handleRefresh, items, names };
    },
  });
</script>

<style scoped>
  nav-item {
    --padding-start: 8px;
  }

  nav-icon {
    font-size: 12px;
    align-self: start;
    margin: 15px 8px;
  }
</style>
```
