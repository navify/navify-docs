```html
<nav-header>
  <nav-toolbar>
    <nav-title>Pull to Refresh</nav-title>
  </nav-toolbar>
</nav-header>

<nav-content>
  <nav-refresher id="refresher" slot="fixed">
    <nav-refresher-content></nav-refresher-content>
  </nav-refresher>

  <nav-list id="list"></nav-list>
</nav-content>

<script>
  const refresher = document.getElementById('refresher');
  const names = ['Burt Bear', 'Charlie Cheetah', 'Donald Duck', 'Eva Eagle', 'Ellie Elephant', 'Gino Giraffe', 'Isabella Iguana', 'Karl Kitten', 'Lionel Lion', 'Molly Mouse', 'Paul Puppy', 'Rachel Rabbit', 'Ted Turtle'];

  refresher.addEventListener('navRefresh', () => {
    setTimeout(() => {
      addItems(3, true);
      refresher.complete();
    }, 2000);
  });

  const list = document.querySelector('nav-list');
  addItems(5, false);

  function chooseRandomName() {
    return names[Math.floor(Math.random() * names.length)];
  }

  function addItems(count, unread) {
    for (let i = 0; i < count; i++) {
      list.insertBefore(createItem(unread), list.firstChild);
    }
  }

  function createItem(unread = false) {
    const name = chooseRandomName();
    let item = document.createElement('nav-item');
    item.button = true;

    item.innerHTML += `
      <nav-icon color="primary" name="${unread ? 'ellipse' : ''}" slot="start"></nav-icon>
      <nav-label>
        <h2>${name}</h2>
        <p>New message from ${name}</p>
      </nav-label>
    `;

    return item;
  }
</script>

<style>
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
