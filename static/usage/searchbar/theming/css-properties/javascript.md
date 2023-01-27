```html
<nav-searchbar show-cancel-button="focus" class="custom"></nav-searchbar>

<style>
/* Scoped components require higher specificity to customize */
nav-searchbar.custom {
  --background: #19422d;
  --color: #fff;
  --placeholder-color: #fff;
  --icon-color: #fff;
  --clear-button-color: #fff;

  --border-radius: 4px;
}

nav-searchbar.ios.custom {
  --cancel-button-color: #19422d;
}

nav-searchbar.md.custom {
  --cancel-button-color: #fff;
}
</style>
```
