```css
nav-popover {
  --background: rgba(40, 173, 218, 0.6);
  --backdrop-opacity: 0.6;
  --box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.6);
  --color: white;
  --width: 300px;
}

nav-popover nav-content {
  --background: rgba(40, 173, 218, 0.6);
}

nav-popover::part(backdrop) {
  background-color: rgb(6, 14, 106);
}
```