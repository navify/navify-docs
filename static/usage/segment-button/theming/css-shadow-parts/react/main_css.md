```css
nav-segment-button::part(indicator-background) {
  background: #08a391;
}

/* Material Design styles */
nav-segment-button.md::part(native) {
  color: #000;
}

.segment-button-checked.md::part(native) {
  color: #08a391;
}

nav-segment-button.md::part(indicator-background) {
  height: 4px;
}

/* iOS styles */
nav-segment-button.ios::part(native) {
  color: #08a391;
}

.segment-button-checked.ios::part(native) {
  color: #fff;
}

nav-segment-button.ios::part(indicator-background) {
  border-radius: 20px;
}
```
