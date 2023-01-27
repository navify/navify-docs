```css
:root {
  --nav-color-rose: #fecdd3;
  --nav-color-rose-rgb: 254,205,211;
  --nav-color-rose-contrast: #000000;
  --nav-color-rose-contrast-rgb: 0,0,0;
  --nav-color-rose-shade: #e0b4ba;
  --nav-color-rose-tint: #fed2d7;
}

.nav-color-rose {
  --nav-color-base: var(--nav-color-rose);
  --nav-color-base-rgb: var(--nav-color-rose-rgb);
  --nav-color-contrast: var(--nav-color-rose-contrast);
  --nav-color-contrast-rgb: var(--nav-color-rose-contrast-rgb);
  --nav-color-shade: var(--nav-color-rose-shade);
  --nav-color-tint: var(--nav-color-rose-tint);
}

div[slot="content"] {
  background: rgba(var(--nav-color-rose-rgb), 0.25)
}
```