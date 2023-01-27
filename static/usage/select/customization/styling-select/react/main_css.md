```css
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
```