```html
<nav-searchbar debounce="1000"></nav-searchbar>
<nav-list></nav-list>

<script>
  const searchbar = document.querySelector('nav-searchbar');
  const list = document.querySelector('nav-list');

  const data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  let results = [...data];
  filterItems(results);

  searchbar.addEventListener('navChange', handleChange);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    results = data.filter(d => d.toLowerCase().indexOf(query) > -1);
    filterItems(results);
  }

  function filterItems(results) {
    list.replaceChildren();

    let items = '';

    for (let i = 0; i < results.length; i++) {
      items += `
        <nav-item>
          <nav-label>${results[i]}</nav-label>
        </nav-item>
      `;
    }

    list.innerHTML = items;
  }
</script>
```
