```html
<nav-list>
  <nav-item>
    <nav-select placeholder="Select food" multiple="true"></nav-select>
  </nav-item>
  <nav-item lines="none">
    <nav-label>
      Current value:
      <nav-text></nav-text>
    </nav-label>
  </nav-item>
</nav-list>

<script>
  const foods = [
    {
      id: 1,
      name: "Apples",
      type: "fruit"
    },
    {
      id: 2,
      name: "Carrots",
      type: "vegetable"
    },
    {
      id: 3,
      name: "Cupcakes",
      type: "dessert"
    }
  ];

  const compareWithFn = (o1, o2) => {
    if(!o1 || !o2) {
      return o1 === o2;
    }

    if(Array.isArray(o2)) {
      return o2.some((o) => o.id === o1.id);
    }

    return o1.id === o2.id;
  };

  const selectEl = document.querySelector('nav-select');
  selectEl.compareWith = compareWithFn;

  foods.forEach((option, i) => {
    const selectOption = document.createElement('nav-select-option');
    selectOption.value = option;
    selectOption.textContent = option.name;
    selectEl.appendChild(selectOption);
  });

  const valueLabel = document.querySelector('nav-text');
  selectEl.addEventListener('navChange', () => {
    valueLabel.innerHTML = JSON.stringify(selectEl.value);
  });
</script>
```
