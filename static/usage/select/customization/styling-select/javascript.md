```html
<nav-select placeholder="Select fruit">
  <nav-select-option value="apples">Apples</nav-select-option>
  <nav-select-option value="oranges">Oranges</nav-select-option>
  <nav-select-option value="bananas">Bananas</nav-select-option>
</nav-select>

<style>
nav-select {
  --placeholder-color: #971e49;
  --placeholder-opacity: 1;
  width: 100%;
  justify-content: center;
}

nav-select::part(placeholder),
nav-select::part(text) {
  flex: 0 0 auto;
}

nav-select::part(placeholder)::first-letter {
  font-size: 24px;
  font-weight: 500;
}

nav-select::part(text) {
  color: #545ca7;
}

nav-select::part(icon) {
  color: #971e49;
  opacity: 1;
}
</style>
```
